import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const releaseSource = await readFile(resolve(root, "src/lib/android-release.ts"), "utf8");
const version = releaseSource.match(/ANDROID_VERSION\s*=\s*"([^"]+)"/)?.[1];

if (!version) {
  throw new Error("ANDROID_VERSION não foi encontrada em src/lib/android-release.ts.");
}

const apkUrl =
  `https://github.com/gcm10000/palavraamiga-releases/releases/download/v${version}` +
  `/palavra-amiga-android-v${version}.apk`;

await writeFile(
  resolve(root, "public/_redirects"),
  `/download/android ${apkUrl} 302\n`,
  "utf8",
);

console.log(`Redirect Android atualizado para ${version}.`);
