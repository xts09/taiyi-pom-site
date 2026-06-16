import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/taiyi-pom-site";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  ...(isGithubPages
    ? {
        output: "export",
        basePath: githubPagesBasePath,
        assetPrefix: githubPagesBasePath,
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

export default nextConfig;
