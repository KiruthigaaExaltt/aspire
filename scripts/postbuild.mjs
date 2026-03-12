import fs from "fs";
// import path from "path";
import archiver from "archiver";

/* ==============================
   CONFIG (DEFINE ONCE HERE)
============================== */

const DIST_FOLDER = "dist";
const CONFIG_FOLDER = "config-files";
const OUTPUT_ROOT = "build-files";
const BUILD_PREFIX = "aspireexcel-build-"; // build-1, build-2, etc.

/* ==============================
   LOGIC
============================== */

console.log("Creating hostable build files...");

// Ensure output root exists
if (!fs.existsSync(OUTPUT_ROOT)) {
  fs.mkdirSync(OUTPUT_ROOT);
}

// Find next build number
let buildNum = 1;
while (fs.existsSync(`${OUTPUT_ROOT}/${BUILD_PREFIX}${buildNum}`)) {
  buildNum++;
}

const buildDir = `${OUTPUT_ROOT}/${BUILD_PREFIX}${buildNum}`;

// Create build directory
fs.mkdirSync(buildDir, { recursive: true });

// Copy folders
function copyDir(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

console.log("Copying dist files...");
copyDir(DIST_FOLDER, buildDir);

console.log("Copying config files...");
copyDir(CONFIG_FOLDER, buildDir);

/* ==============================
   ZIP SECTION
============================== */

const zipPath = `${buildDir}.zip`;
console.log("Creating zip file...");

const output = fs.createWriteStream(zipPath);
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
  console.log(`Zip created successfully (${archive.pointer()} total bytes)`);
  console.log(`Build files created successfully in ${buildDir}/`);
  console.log(`Zipped build files to ${zipPath}`);
});

archive.on("error", (err) => {
  throw err;
});

archive.pipe(output);

// Add build directory contents to zip
archive.directory(buildDir, false);

archive.finalize();
 