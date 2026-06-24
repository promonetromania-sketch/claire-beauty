import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const dir = path.resolve("public/images/claire-beauty")

/** Max width for hero / card images */
const HERO_MAX = 1400
/** Max width for inline content images */
const CONTENT_MAX = 1200
/** Max width for portrait / about */
const PORTRAIT_MAX = 1200

function isHero(name) {
  return name.includes("-hero.") || name === "claire-beauty-hero-salon.jpg"
}

function isPortrait(name) {
  return name.includes("portret") || name.includes("about")
}

async function optimizeFile(filePath) {
  const name = path.basename(filePath)
  const ext = path.extname(filePath).toLowerCase()
  const before = fs.statSync(filePath).size
  const meta = await sharp(filePath).metadata()

  let pipeline = sharp(filePath).rotate()
  const maxWidth = isPortrait(name)
    ? PORTRAIT_MAX
    : isHero(name)
      ? HERO_MAX
      : CONTENT_MAX

  if ((meta.width ?? 0) > maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, {
      withoutEnlargement: true,
      fit: "inside",
    })
  }

  let out
  if (ext === ".png") {
    // Photo-like PNGs: convert to JPEG for much smaller size
    out = pipeline.jpeg({ quality: 82, mozjpeg: true })
    const newPath = filePath.replace(/\.png$/i, ".jpg")
    await out.toFile(newPath + ".tmp")
    fs.renameSync(newPath + ".tmp", newPath)
    if (newPath !== filePath) fs.unlinkSync(filePath)
    const after = fs.statSync(newPath).size
    return { name, before, after, newName: path.basename(newPath), converted: true }
  }

  out = pipeline.jpeg({ quality: 82, mozjpeg: true })
  await out.toFile(filePath + ".tmp")
  fs.renameSync(filePath + ".tmp", filePath)
  const after = fs.statSync(filePath).size
  return { name, before, after, newName: name, converted: false }
}

const targets = fs
  .readdirSync(dir)
  .filter(
    (f) =>
      f.startsWith("site-poze-") ||
      f === "claire-beauty-hero-salon.jpg" ||
      f === "claire-beauty-logo.jpg",
  )
  .map((f) => path.join(dir, f))

const results = []
for (const filePath of targets) {
  results.push(await optimizeFile(filePath))
}

let saved = 0
for (const r of results) {
  saved += r.before - r.after
  const pct = (((r.before - r.after) / r.before) * 100).toFixed(0)
  console.log(
    `${r.name}${r.converted ? " → " + r.newName : ""}: ${(r.before / 1024 / 1024).toFixed(2)}MB → ${(r.after / 1024 / 1024).toFixed(2)}MB (-${pct}%)`,
  )
}
console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(2)} MB`)

// Write PNG→JPG renames for manual registry update
const renames = results.filter((r) => r.converted)
if (renames.length) {
  fs.writeFileSync(
    path.resolve("scripts/optimize-png-renames.json"),
    JSON.stringify(renames, null, 2),
  )
}
