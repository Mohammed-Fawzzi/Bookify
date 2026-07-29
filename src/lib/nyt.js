const NYT_API_BASE_URL =
  process.env.NYT_API_BASE_URL || "https://api.nytimes.com/svc/books/v3";

// Fallback keeps deploys working if Vercel env vars are missing.
// Prefer setting NYT_API_KEY in Vercel Project Settings.
const NYT_API_KEY =
  process.env.NYT_API_KEY || "zcQloO4ATXwDFMTJa6IXE5SNLqCESuZX";

export function getNytUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const separator = normalizedPath.includes("?") ? "&" : "?";
  return `${NYT_API_BASE_URL}${normalizedPath}${separator}api-key=${NYT_API_KEY}`;
}
