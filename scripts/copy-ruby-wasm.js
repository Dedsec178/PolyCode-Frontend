#!/usr/bin/env node
/**
 * Downloads the Ruby WASM binary into public/ so production can serve it
 * from the same origin (avoids CDN/CSP blocks in deployed builds).
 */
const fs = require("fs");
const path = require("path");

const VERSION = "2.9.3-2.9.4";
const WASM_URL = `https://cdn.jsdelivr.net/npm/@ruby/3.4-wasm-wasi@${VERSION}/dist/ruby+stdlib.wasm`;
const DEST_DIR = path.join(__dirname, "../public/ruby");
const DEST_FILE = path.join(DEST_DIR, "ruby-stdlib.wasm");
const MIN_BYTES = 1_000_000;

async function main() {
  fs.mkdirSync(DEST_DIR, { recursive: true });

  if (fs.existsSync(DEST_FILE)) {
    const { size } = fs.statSync(DEST_FILE);
    if (size >= MIN_BYTES) {
      console.log(`Ruby WASM already present (${(size / 1024 / 1024).toFixed(1)} MB)`);
      return;
    }
    fs.unlinkSync(DEST_FILE);
  }

  console.log("Downloading Ruby WASM for local/production hosting...");
  const response = await fetch(WASM_URL);
  if (!response.ok) {
    throw new Error(`Ruby WASM download failed: HTTP ${response.status}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < MIN_BYTES) {
    throw new Error("Downloaded Ruby WASM file looks invalid (too small).");
  }

  fs.writeFileSync(DEST_FILE, bytes);
  console.log(
    `Ruby WASM ready at public/ruby/ruby-stdlib.wasm (${(bytes.length / 1024 / 1024).toFixed(1)} MB)`,
  );
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
