import babel from "@babel/core";
import fs from "fs";

// Same order as the old index.html script tags; __V5__ marks the flag.
const order = ["data", "tweaks", "charts", "worklist", "mark", "robot", "walker",
  "bench", "board", "__V5__", "word", "hero", "about", "case-study", "case-viz",
  "viz-board", "works-resume", "app"];

let out = "";
for (const name of order) {
  if (name === "__V5__") { out += "\nwindow.__V5 = true;\n"; continue; }
  const code = fs.readFileSync(`src/${name}.jsx`, "utf8");
  const res = babel.transformSync(code, {
    presets: [["@babel/preset-react", { runtime: "classic" }]],
    filename: `${name}.jsx`,
    compact: false,
    comments: false,
  });
  out += `\n/* ===== ${name} ===== */\n` + res.code + "\n";
}
fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/bundle.js", out);
console.log("dist/bundle.js written:", (out.length / 1024).toFixed(0) + "KB");
