/** Resolve a public asset path against Vite's base (needed for GitHub Pages). */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  const clean = path.replace(/^\//, "");
  return `${base}${clean}`;
};
