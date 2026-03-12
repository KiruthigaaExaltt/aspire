import fs from "fs";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = "./src/assets/images/webp"; // source image folder
const OUTPUT_DIR = "./public/assets/images/webp/optimized"; // output folder
const SIZES = [300, 600, 1000]; // sizes to generate

// Ensure output folder exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function processImages() {
  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((file) => /\.(webp|jpg|jpeg|png)$/i.test(file));

  console.log(`🔧 Found ${files.length} images in ${INPUT_DIR}\n`);

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);

    // Check if all optimized versions already exist
    const allExist = SIZES.every((size) => {
      const outputFile = `${baseName}-${size}.webp`;
      const outputPath = path.join(OUTPUT_DIR, outputFile);
      return fs.existsSync(outputPath);
    });

    if (allExist) {
      console.log(`⏩ Skipped: ${file} (already optimized)`);
      continue;
    }

    console.log(`⚙️  Processing: ${file}`);

    for (const size of SIZES) {
      const outputFile = `${baseName}-${size}.webp`;
      const outputPath = path.join(OUTPUT_DIR, outputFile);

      // Skip only missing sizes (partial generation allowed)
      if (fs.existsSync(outputPath)) {
        console.log(`   ↳ Skipping existing size: ${outputFile}`);
        continue;
      }

      try {
        await sharp(inputPath)
          .resize(size) // auto scales height proportionally
          .webp({ quality: 75 }) // adjust quality if needed
          .toFile(outputPath);

        console.log(`   ✅ Generated: ${outputFile}`);
      } catch (err) {
        console.error(`   ❌ Error at ${size}px:`, err.message);
      }
    }
  }

  console.log("\n🎉 Image resizing complete!");
}

processImages();
