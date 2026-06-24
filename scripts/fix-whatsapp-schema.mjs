import fs from "node:fs"
import path from "node:path"

const root = path.resolve(".")

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("_backup") || entry.name === "node_modules") continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (/\.tsx?$/.test(entry.name)) files.push(full)
  }
  return files
}

const waPatterns = [
  /href=\{`https:\/\/wa\.me\/40757851882\?text=\$\{encodeURIComponent\([^)]+\)\}`\}/g,
  /href="https:\/\/wa\.me\/40757851882\?text=[^"]+"/g,
]

const addressPattern =
  /address: \{\s*"@type": "PostalAddress",\s*addressLocality: businessProfile\.address\.locality,\s*addressRegion: businessProfile\.address\.region,\s*addressCountry: businessProfile\.address\.country,\s*\},/g

const whatsappPropPattern = /\s*whatsappMessage=\{[^}]+\}\n/g

let changed = 0

for (const file of walk(path.join(root, "components"))) {
  let content = fs.readFileSync(file, "utf8")
  const original = content

  for (const pattern of waPatterns) {
    content = content.replace(pattern, "href={businessProfile.whatsappUrl}")
  }

  content = content.replace(/\s*whatsappMessage=\{[^}]+\}\n/g, "\n")

  if (content.includes("businessProfile.whatsappUrl") && !content.includes("@/lib/seo/business")) {
    const importMatch = content.match(/^import .+$/m)
    if (importMatch) {
      content = content.replace(
        importMatch[0],
        `${importMatch[0]}\nimport { businessProfile } from "@/lib/seo/business"`,
      )
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content)
    changed++
    console.log("components:", path.relative(root, file))
  }
}

for (const file of walk(path.join(root, "app"))) {
  let content = fs.readFileSync(file, "utf8")
  const original = content

  for (const pattern of waPatterns) {
    content = content.replace(pattern, "href={businessProfile.whatsappUrl}")
  }

  content = content.replace(addressPattern, "address: postalAddressSchema,")
  content = content.replace(/\s*whatsappMessage=\{[^}]+\}\n/g, "\n")
  content = content.replace(/\s*whatsappMessage=\{`[^`]+`\}\n/g, "\n")

  if (content.includes("postalAddressSchema") && !content.includes("postalAddressSchema")) {
    // noop
  }

  if (content.includes("postalAddressSchema")) {
    content = content.replace(
      /import \{ businessProfile, localBusinessId \} from "@\/lib\/seo\/business"/g,
      'import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"',
    )
    content = content.replace(
      /import \{ businessProfile \} from "@\/lib\/seo\/business"/g,
      'import { businessProfile, postalAddressSchema } from "@/lib/seo/business"',
    )
  }

  if (content.includes("businessProfile.whatsappUrl") && !content.includes("@/lib/seo/business")) {
    const importMatch = content.match(/^import .+$/m)
    if (importMatch) {
      content = content.replace(
        importMatch[0],
        `${importMatch[0]}\nimport { businessProfile } from "@/lib/seo/business"`,
      )
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content)
    changed++
    console.log("app:", path.relative(root, file))
  }
}

console.log(`\nUpdated ${changed} files.`)
