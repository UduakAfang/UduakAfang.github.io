import sharp from "sharp";
import fs from "fs";
const jsx = fs.readdirSync("src").filter(f => f.endsWith(".jsx"))
  .map(f => fs.readFileSync("src/" + f, "utf8")).join("\n");
const refs = [...new Set([...jsx.matchAll(/images\/[A-Za-z0-9\/_.-]+\.(?:png|jpe?g)/gi)].map(m => m[0]))];
let before = 0, after = 0, changed = 0;
for (const rel of refs) {
  if (!fs.existsSync(rel)) { continue; }
  const buf = fs.readFileSync(rel);
  const meta = await sharp(buf, { failOn: "none" }).metadata();
  let pipe = sharp(buf, { failOn: "none" }).rotate();
  if (meta.width > 1440) pipe = pipe.resize({ width: 1440 });
  const isJpg = /\.jpe?g$/i.test(rel);
  const out = isJpg
    ? await pipe.jpeg({ quality: 82, mozjpeg: true }).toBuffer()
    : await pipe.png({ quality: 86, compressionLevel: 9, palette: true, dither: 1 }).toBuffer();
  before += buf.length;
  if (out.length < buf.length * 0.95) { fs.writeFileSync(rel, out); after += out.length; changed++; console.log((meta.width+"w  ").slice(0,6), (buf.length/1024|0)+"KB -> "+(out.length/1024|0)+"KB  "+rel); }
  else { after += buf.length; }
}
console.log(`\nOptimised ${changed}/${refs.length} images.  Total ${(before/1024|0)}KB -> ${(after/1024|0)}KB`);
