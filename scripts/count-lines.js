const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const PUBLIC_PATH = path.join(ROOT, "public", "lines.json");
const ALLOWED_EXT = new Set([".ts", ".tsx"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "public"]);

async function countLines(filePath) {
  const content = await fs.promises.readFile(filePath, "utf8");
  if (content.length === 0) return 0;
  return content.split("\n").length;
}

async function walk(dir) {
  let total = 0;
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      total += await walk(fullPath);
      continue;
    }
    if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (!ALLOWED_EXT.has(ext)) continue;
      total += await countLines(fullPath);
    }
  }

  return total;
}

async function main() {
  const total = await walk(ROOT);
  await fs.promises.mkdir(path.dirname(PUBLIC_PATH), { recursive: true });
  await fs.promises.writeFile(
    PUBLIC_PATH,
    JSON.stringify({ lines: total }, null, 2)
  );
  console.log(`Wrote ${PUBLIC_PATH} with ${total} lines.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
