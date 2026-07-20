export function sitePath(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  if (path === "/") return normalizedBase;
  if (path.startsWith("/#")) return `${normalizedBase}#${path.slice(2)}`;
  if (path.startsWith("#")) return `${normalizedBase}${path}`;
  if (path.startsWith("/")) return `${normalizedBase}${path.slice(1)}`;
  return `${normalizedBase}${path}`;
}
