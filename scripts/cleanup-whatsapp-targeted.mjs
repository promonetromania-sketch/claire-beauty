import fs from "node:fs"
import path from "node:path"

const root = path.resolve(".")
const targets = [
  ...fs.readdirSync(path.join(root, "app")).flatMap((name) => {
    const p = path.join(root, "app", name)
    if (name.endsWith(".tsx")) return [p]
    if (fs.statSync(p).isDirectory()) {
      const page = path.join(p, "page.tsx")
      return fs.existsSync(page) ? [page] : []
    }
    return []
  }),
  path.join(root, "app", "blog", "[slug]", "page.tsx"),
]

const heroDir = path.join(root, "components", "services")

for (const file of targets) {
  if (!fs.existsSync(file)) continue
  let content = fs.readFileSync(file, "utf8")
  const original = content

  content = content.replace(
    /,\s*\n?\s*[a-zA-Z]+WhatsappMessage\s*\n/g,
    "\n",
  )
  content = content.replace(
    /,\s*[a-zA-Z]+WhatsappMessage\s*(?=\})/g,
    "",
  )
  content = content.replace(
    /import \{\s*[a-zA-Z]+WhatsappMessage\s*\} from[^\n]+\n/g,
    "",
  )

  if (content !== original) {
    fs.writeFileSync(file, content)
    console.log("app:", path.relative(root, file))
  }
}

for (const entry of fs.readdirSync(heroDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue
  for (const name of ["*-hero.tsx"]) {
    const matches = fs
      .readdirSync(path.join(heroDir, entry.name))
      .filter((f) => f.endsWith("-hero.tsx"))
    for (const hero of matches) {
      const file = path.join(heroDir, entry.name, hero)
      let content = fs.readFileSync(file, "utf8")
      const original = content
      content = content.replace(
        /const whatsappMessage =[\s\S]*?\n\n/g,
        "",
      )
      if (content !== original) {
        fs.writeFileSync(file, content)
        console.log("hero:", path.relative(root, file))
      }
    }
  }
}

console.log("Targeted cleanup done.")
