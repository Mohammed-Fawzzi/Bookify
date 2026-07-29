const NYT_API_BASE_URL =
  process.env.NYT_API_BASE_URL || "https://api.nytimes.com/svc/books/v3";

const NYT_API_KEY = process.env.NYT_API_KEY || "";

export function getNytUrl(path) {
  if (!NYT_API_KEY) {
    throw new Error(
      "Missing NYT_API_KEY. Add it in Vercel Project Settings → Environment Variables."
    );
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${NYT_API_BASE_URL}${normalizedPath}${
    normalizedPath.includes("?") ? "&" : "?"
  }api-key=${NYT_API_KEY}`;
}
