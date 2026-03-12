#!/usr/bin/env node

/**
 * Script to test meta tags after production build
 * Run this after building the project to verify meta tags are correct
 */

import { readFile } from "fs/promises";
import { join } from "path";
import metaData from "./metaData.node.mjs";

const OUT_DIR = "dist";

async function testMetaTags() {
  console.log("🔍 Testing meta tags in production build...\n");

  let passed = 0;
  let failed = 0;

  for (const meta of metaData) {
    try {
      const filePath =
        meta.slug === "/"
          ? join(OUT_DIR, "index.html")
          : join(OUT_DIR, meta.slug, "index.html");

      const content = await readFile(filePath, "utf8");

      // Check if meta tags are present with more flexible matching
      const hasTitle = content.includes(`<title>${meta.meta_title}</title>`);

      const hasDescription =
        content.includes(
          `name="description" content="${meta.meta_description}"`
        ) || content.includes(`content="${meta.meta_description}"`);

      const hasOgTitle =
        content.includes(`property="og:title" content="${meta.meta_title}"`) ||
        content.includes(`content="${meta.meta_title}"`);

      const hasKeywords = !meta.meta_keywords ||
        content.includes(`name="keywords" content="${meta.meta_keywords}"`);

      // Check if placeholders are still present (this means replacement failed)
      const hasPlaceholders =
        content.includes("__TITLE_PLACEHOLDER__") ||
        content.includes("__DESCRIPTION_PLACEHOLDER__") ||
        content.includes("__KEYWORDS_PLACEHOLDER__") ||
        content.includes("__OG_TITLE_PLACEHOLDER__");

      if (hasPlaceholders) {
        console.log(`❌ ${meta.slug} - Placeholders not replaced`);
        failed++;
      } else if (hasTitle && hasDescription && hasOgTitle && hasKeywords) {
        console.log(`✅ ${meta.slug} - Meta tags OK`);
        passed++;
      } else {
        console.log(`❌ ${meta.slug} - Missing meta tags`);
        if (!hasTitle) console.log(`   - Missing title: ${meta.meta_title}`);
        if (!hasDescription) console.log(`   - Missing description`);
        if (!hasKeywords) console.log(`   - Missing keywords: ${meta.meta_keywords}`);
        if (!hasOgTitle) console.log(`   - Missing OG title`);

        // Show a snippet of what we found
        const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/);
        const descMatch = content.match(
          /name="description"[^>]*content="([^"]*)"/
        );

        if (titleMatch) console.log(`   - Found title: ${titleMatch[1]}`);
        if (descMatch)
          console.log(
            `   - Found description: ${descMatch[1].substring(0, 50)}...`
          );

        failed++;
      }
    } catch (error) {
      console.log(
        `❌ ${meta.slug} - File not found or error: ${error.message}`
      );
      failed++;
    }
  }

  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

  if (failed > 0) {
    console.log("\n💡 Tips to fix:");
    console.log("1. Run 'npm run build' to generate the production build");
    console.log("2. Ensure the gen-seo-files.mjs script runs after build");
    console.log("3. Check that all routes in metaData.js are correct");
    process.exit(1);
  } else {
    console.log("\n🎉 All meta tags are correctly generated!");
  }
}

testMetaTags().catch(console.error);
