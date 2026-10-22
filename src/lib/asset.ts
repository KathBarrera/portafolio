/** Prefixes a /public path with the base path (needed on GitHub Pages, where the site lives under /portafolio). */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
