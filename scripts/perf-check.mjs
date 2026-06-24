const urls = [
  "http://localhost:3007/",
  "http://localhost:3007/microdermabraziune-craiova",
  "http://localhost:3007/blog",
]

for (const url of urls) {
  const t0 = performance.now()
  const res = await fetch(url)
  const html = await res.text()
  const ms = Math.round(performance.now() - t0)
  const imgTags = (html.match(/_next\/image/g) || []).length
  console.log(`${url} | ${res.status} | ${ms}ms | ${(html.length / 1024).toFixed(1)}KB HTML | ${imgTags} next/image refs`)
}
