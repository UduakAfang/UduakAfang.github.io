/* Renders the framed project covers in images/covers/ from scripts/cover-compose.html.
   Usage: node scripts/render-covers.cjs   (needs playwright + sharp from devDependencies) */
const path = require("path");
const { chromium } = require("playwright");
const sharp = require("sharp");
const root = path.resolve(__dirname, "..");
(async () => {
  const b = await chromium.launch({ args: ["--allow-file-access-from-files"] });
  const p = await b.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1.5 });
  for (const n of ["leaders", "nyc", "trackperform", "drillcal"]) {
    await p.goto("file://" + path.join(root, "scripts/cover-compose.html") + "?p=" + n + "&root=" + encodeURIComponent("file://" + path.join(root, "images")));
    await p.waitForTimeout(1500);
    const png = await p.screenshot();
    await sharp(png).jpeg({ quality: 86, progressive: true }).toFile(path.join(root, "images/covers", n + ".jpg"));
  }
  await b.close();
})();
