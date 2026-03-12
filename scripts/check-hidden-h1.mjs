import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const DIST_DIR = "dist";

async function getFiles(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        dirents.map((dirent) => {
            const res = join(dir, dirent.name);
            return dirent.isDirectory() ? getFiles(res) : res;
        })
    );
    return Array.prototype.concat(...files);
}

async function checkH1() {
    console.log("🔍 Checking for <h1> tags in built routes...\n");

    try {
        const allFiles = await getFiles(DIST_DIR);
        const htmlFiles = allFiles.filter((f) => f.endsWith("index.html"));

        let withH1 = 0;
        const missing = [];

        for (const file of htmlFiles) {
            const content = await readFile(file, "utf8");

            // Check for any <h1> tag
            const h1Regex = /<h1[\s>]/i;

            if (h1Regex.test(content)) {
                withH1++;
            } else {
                const route = "/" + relative(DIST_DIR, file).replace(/\\/g, "/").replace(/index\.html$/, "");
                missing.push(route);
            }
        }

        console.log(`Checked index files: ${htmlFiles.length}`);
        console.log(`With h1: ${withH1}`);
        console.log(`Missing h1: ${missing.length}`);

        if (missing.length > 0) {
            console.log("\nRoutes missing <h1> tag:");
            missing.forEach((route) => console.log(`- ${route}`));
            process.exit(1);
        }

        console.log("\n✅ All built routes include an <h1> tag.");
    } catch (error) {
        if (error.code === "ENOENT") {
            console.error(`❌ dist directory not found. Run 'npm run build' first.`);
        } else {
            console.error(`❌ Error checking h1 tags: ${error.message}`);
        }
        process.exit(1);
    }
}

checkH1();
