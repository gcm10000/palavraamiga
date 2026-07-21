import { access, mkdir, readFile, writeFile } from "node:fs/promises";

const source = "dist-pages/index.static.html";
const routes = ["privacidade", "termos", "convite/sabedoria"];

await access(source);

// Pages caches JavaScript assets at the edge and in browsers. Although Vite
// fingerprints assets, adding the deployment revision to the entry URL makes
// a newly published Pages deployment unambiguous even if an intermediary kept
// an earlier response for the same asset path.
const revision = (process.env.CF_PAGES_COMMIT_SHA ?? process.env.GITHUB_SHA ?? "local").slice(0, 12);
const sourceHtml = await readFile(source, "utf8");
const html = sourceHtml.replace(
  /(<script type="module"[^>]*\ssrc="\/assets\/[^"?]+)(")/,
  `$1?v=${revision}$2`,
);

await writeFile("dist-pages/index.html", html);
await writeFile("dist-pages/404.html", html);

for (const route of routes) {
  const routeDir = `dist-pages/${route}`;

  await mkdir(routeDir, { recursive: true });
  await writeFile(`${routeDir}/index.html`, html);
}
