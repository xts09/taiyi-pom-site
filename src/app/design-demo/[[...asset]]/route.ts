import { readFile } from "node:fs/promises";
import path from "node:path";

const demoDirectory = path.join(process.cwd(), "outputs", "envalior-demo-20261009");
const mimeTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};
const allowedFiles = new Set(["index.html", "demo.css", "demo.js", "pages.js", "data.js", "icons.js"]);

export async function GET(
  _request: Request,
  context: { params: Promise<{ asset?: string[] }> },
) {
  if (process.env.NODE_ENV !== "development") return new Response("Not found", { status: 404 });
  const { asset = [] } = await context.params;
  const name = asset.length ? asset.join("/") : "index.html";
  const isAsset = asset.length === 2 && ["assets", "references"].includes(asset[0]);
  if ((!allowedFiles.has(name) && !isAsset) || asset.some(segment => !/^[a-zA-Z0-9_.-]+$/.test(segment) || segment === "." || segment === "..")) {
    return new Response("Not found", { status: 404 });
  }
  const extension = path.extname(name);
  if (!mimeTypes[extension]) return new Response("Not found", { status: 404 });
  try {
    const bytes = await readFile(path.join(demoDirectory, name));
    const body = name === "index.html"
      ? bytes.toString("utf8").replace("<head>", '<head><base href="/design-demo/">')
      : new Uint8Array(bytes);
    return new Response(body, {
      headers: {
        "Content-Type": mimeTypes[extension],
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
