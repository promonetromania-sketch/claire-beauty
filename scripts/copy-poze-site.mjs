import fs from "node:fs"
import path from "node:path"

const root = path.resolve("public/images/POZE SITE")
const dest = path.resolve("public/images/claire-beauty")

const mappings = [
  ["dermapen", "dermapen 2.JPG", "site-poze-dermapen-hero.jpg"],
  ["dermapen", "dermapen3.PNG", "site-poze-dermapen-content.png"],
  ["drenaj limfatic", "drenaj limfatic 2.PNG", "site-poze-drenaj-hero.png"],
  ["drenaj limfatic", "drenaj limfatic 3.PNG", "site-poze-drenaj-content.png"],
  [
    "electrostimulare corporala",
    "electrostimulare corporala.PNG",
    "site-poze-electrostimulare-hero.png",
  ],
  [
    "electrostimulare corporala",
    "electrostimulare 5.PNG",
    "site-poze-electrostimulare-content.png",
  ],
  ["hifu facial", "hifu facial.JPG", "site-poze-hifu-hero.jpg"],
  ["hifu facial", "hifu facial 5.PNG", "site-poze-hifu-content.png"],
  ["hydrafacial", "hydrafacial.JPG", "site-poze-hydrafacial-hero.jpg"],
  ["hydrafacial", "hydrafacial 6.PNG", "site-poze-hydrafacial-content.png"],
  ["masaj", "masaj relaxare.JPG", "site-poze-masaj-hero.jpg"],
  ["masaj", "MASAJ (3).jpg", "site-poze-masaj-content.jpg"],
  [
    "masaj anticelulitic",
    "masaj anticelulitic.JPG",
    "site-poze-masaj-anticelulitic-hero.jpg",
  ],
  [
    "masaj anticelulitic",
    "masajj ANTICELULITIC.PNG",
    "site-poze-masaj-anticelulitic-content.png",
  ],
  [
    "masaj terapeutic",
    "masaj terapeutic.PNG",
    "site-poze-masaj-terapeutic-hero.png",
  ],
  [
    "masaj terapeutic",
    "mesaj terapeutic.PNG",
    "site-poze-masaj-terapeutic-content.png",
  ],
  [
    "microdermabraziune",
    "microdermabraziune.JPG",
    "site-poze-microdermabraziune-hero.jpg",
  ],
  [
    "microdermabraziune",
    "microdermabraziune2.JPG.PNG",
    "site-poze-microdermabraziune-content.png",
  ],
  ["microneedling", "microneedling .JPG", "site-poze-microneedling-hero.jpg"],
  ["microneedling", "microneedlingg.PNG", "site-poze-microneedling-content.png"],
  ["radiofrecventa", "radiofrecventa 2.JPG", "site-poze-radiofrecventa-hero.jpg"],
  [
    "radiofrecventa",
    "radiofrecventa corporala .PNG",
    "site-poze-radiofrecventa-content.png",
  ],
  ["reflexoterapie", "reflexoterapie.JPG", "site-poze-reflexoterapie-hero.jpg"],
  [
    "reflexoterapie",
    "reflexoterapie2.PNG",
    "site-poze-reflexoterapie-content.png",
  ],
  [
    "remodelare corporala",
    "remodelare corporala 33.PNG",
    "site-poze-remodelare-hero.png",
  ],
  [
    "remodelare corporala",
    "remodelare corporala 34.PNG",
    "site-poze-remodelare-content.png",
  ],
  [
    "tratamente corporale",
    "tratamente corporale.jpg",
    "site-poze-tratamente-corporale-hero.jpg",
  ],
  [
    "tratamente corporale",
    "tratamente corporale2.PNG",
    "site-poze-tratamente-corporale-content.png",
  ],
  [
    "tratamente faciale",
    "tratamente facialee.PNG",
    "site-poze-tratamente-faciale-hero.png",
  ],
  [
    "tratamente faciale",
    "tratamente facialee2.PNG",
    "site-poze-tratamente-faciale-content.png",
  ],
  ["home page", "Ana S (1).jpg", "site-poze-about-portret.jpg"],
  ["logo", "logo.jpg", "ana-savovici-body-spa-logo.jpg"],
]

fs.mkdirSync(dest, { recursive: true })

for (const [folder, srcName, destName] of mappings) {
  const src = path.join(root, folder, srcName)
  const out = path.join(dest, destName)
  if (!fs.existsSync(src)) {
    console.error("MISSING:", src)
    process.exitCode = 1
    continue
  }
  fs.copyFileSync(src, out)
  console.log("OK", destName, "<-", path.join(folder, srcName))
}
