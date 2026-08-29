import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the Next.js basePath.
 * Handles build-time environment variable as well as runtime URL inspection.
 */
export function getBasePath(): string {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  if (typeof window !== "undefined" && window.location.pathname.startsWith("/Portfolio")) {
    return "/Portfolio";
  }
  return process.env.NODE_ENV === "production" ? "/Portfolio" : "";
}

/**
 * Ensures an asset path (image, pdf, favicon) is properly prefixed with basePath for GitHub Pages.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const basePath = getBasePath();
  if (basePath) {
    if (path.startsWith(basePath)) {
      return path;
    }
    if (path.startsWith("/")) {
      return `${basePath}${path}`;
    }
    return `${basePath}/${path}`;
  }
  return path;
}
