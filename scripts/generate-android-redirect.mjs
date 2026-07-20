import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const releaseSource = await readFile(resolve(root, "src/lib/android-release.ts"), "utf8");
const version = releaseSource.match(/ANDROID_VERSION\s*=\s*"([^"]+)"/)?.[1];
const manifest = JSON.parse(
  await readFile(resolve(root, "public/version.json"), "utf8"),
);

if (!version) {
  throw new Error("ANDROID_VERSION não foi encontrada em src/lib/android-release.ts.");
}

if (manifest.android?.latestVersion !== version) {
  throw new Error(
    `Versões Android divergentes: android-release.ts=${version} e version.json=${manifest.android?.latestVersion ?? "ausente"}.`,
  );
}

const apkUrl =
  `https://github.com/gcm10000/palavraamiga-releases/releases/download/v${version}` +
  `/palavra-amiga-android-v${version}.apk`;

if (manifest.android?.apkUrl !== apkUrl) {
  throw new Error(`apkUrl divergente em version.json. Esperado: ${apkUrl}`);
}

await writeFile(
  resolve(root, "public/_redirects"),
  `/download/android ${apkUrl} 302\n`,
  "utf8",
);

console.log(`Redirect Android atualizado para ${version}.`);
