import sharp from "sharp"
import { readdirSync, statSync } from "fs"
import { join, extname } from "path"

const ROOT = join(process.cwd(), "public")
const MIN_KB = 300
const MAX_WIDTH = 1600
const QUALITY = 82

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, acc)
    else if (/\.(jpe?g)$/i.test(name)) acc.push(p)
  }
  return acc
}

const files = walk(ROOT).filter((f) => statSync(f).size > MIN_KB * 1024)
let saved = 0

for (const file of files) {
  const before = statSync(file).size
  const img = sharp(file)
  const meta = await img.metadata()
  let pipeline = img.rotate()
  if ((meta.width ?? 0) > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }
  const buf = await pipeline
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toBuffer()
  if (buf.length < before) {
    await sharp(buf).toFile(file)
    saved += before - buf.length
    console.log(
      `${((before - buf.length) / 1024).toFixed(0)}KB saved | ${(buf.length / 1024).toFixed(0)}KB | ${file.replace(ROOT + "\\", "").replace(ROOT + "/", "")}`,
    )
  }
}

console.log(`\nOptimized ${files.length} files. Total saved: ${(saved / 1024 / 1024).toFixed(2)} MB`)
