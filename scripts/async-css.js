import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const htmlFile = path.join(distDir, "index.html");

try {
  let html = fs.readFileSync(htmlFile, "utf-8");

  // Find the generated CSS file (e.g. /assets/index-xxxxx.css)
  const cssFile = html.match(/\/assets\/index-[\w]+\.css/);

  if (cssFile) {
    const cssPath = cssFile[0];

    // Replace normal link with async preload + noscript fallback
    const newLink = `
<link rel="preload" href="${cssPath}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="${cssPath}"></noscript>
    `.trim();

    html = html.replace(new RegExp(`<link[^>]+${cssPath}[^>]*>`, "g"), newLink);

    fs.writeFileSync(htmlFile, html);
    console.log("✅ Async CSS preload injected successfully!");
  } else {
    console.warn("⚠️ No CSS file found in index.html. Skipping...");
  }
} catch (err) {
  console.error("❌ Error while injecting async CSS:", err);
}
