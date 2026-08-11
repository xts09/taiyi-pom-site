import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const isDevelopment = process.env.NODE_ENV === "development";
const distDir = process.env.NEXT_DIST_DIR;
const githubPagesBasePath = "/taiyi-pom-site";
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "img-src 'self' data: https:",
  "media-src 'self'",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://www.google.com https://googleads.g.doubleclick.net",
  "form-action 'self' mailto:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  ...(!isDevelopment
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000",
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  poweredByHeader: false,
  images: {
    qualities: [75, 85],
    ...(isGithubPages ? { unoptimized: true } : {}),
  },
  ...(distDir ? { distDir } : {}),
  experimental: {
    cpus: 4,
  },
  ...(!isGithubPages
    ? {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: securityHeaders,
            },
          ];
        },
        async redirects() {
          return [
            {
              source: "/:path*",
              has: [
                {
                  type: "host",
                  value: "taiyipolymer.com",
                },
              ],
              destination: "https://www.taiyipolymer.com/:path*",
              permanent: true,
            },
          ];
        },
      }
    : {}),
  ...(isGithubPages
    ? {
        output: "export",
        basePath: githubPagesBasePath,
        assetPrefix: githubPagesBasePath,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
