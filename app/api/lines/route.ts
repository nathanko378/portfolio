import { NextResponse } from "next/server";
import { readdir, readFile } from "fs/promises";
import path from "path";

const ROOT = process.cwd();
const ALLOWED_EXT = new Set([".ts", ".tsx"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "public"]);

async function countLines(filePath: string): Promise<number> {
  const content = await readFile(filePath, "utf8");
  if (content.length === 0) return 0;
  return content.split("\n").length;
}

async function walk(dir: string): Promise<number> {
  let total = 0;
  const entries = await readdir(dir, { withFileTypes: true });

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

export async function GET() {
  try {
    const total = await walk(ROOT);
    return NextResponse.json({ lines: total });
  } catch (error) {
    return NextResponse.json({ lines: 0, error: "failed" }, { status: 500 });
  }
}
