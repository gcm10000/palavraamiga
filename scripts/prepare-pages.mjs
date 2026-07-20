import { access, copyFile, mkdir } from "node:fs/promises";

const source = "dist-pages/index.static.html";
const routes = ["privacidade", "termos", "convite/sabedoria"];

await access(source);
await copyFile(source, "dist-pages/index.html");
await copyFile(source, "dist-pages/404.html");

for (const route of routes) {
  const routeDir = `dist-pages/${route}`;

  await mkdir(routeDir, { recursive: true });
  await copyFile(source, `${routeDir}/index.html`);
}
