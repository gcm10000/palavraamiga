import { copyFile, access } from "node:fs/promises";

const source = "dist-pages/index.static.html";

await access(source);
await copyFile(source, "dist-pages/index.html");
await copyFile(source, "dist-pages/404.html");
