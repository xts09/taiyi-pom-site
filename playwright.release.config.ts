import { execFileSync } from "node:child_process";
import { defineConfig } from "@playwright/test";

// Run only against the production build belonging to this checkout.
const sha = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
const baseURL = "http://127.0.0.1:3107";

export default defineConfig({
  testDir: "./tests/browser",
  testMatch: ["release-smoke.spec.ts", "inquiry-conversions.spec.ts"],
  outputDir: "./outputs/release-check/browser-results",
  metadata: { commit: sha, server: "production build", viewport: "1920x1080 / 390x844" },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 45_000,
  expect: { timeout: 10_000 },
  reporter: [
    ["list"],
    ["html", { outputFolder: "outputs/release-check/browser-report", open: "never" }],
    ["json", { outputFile: "outputs/release-check/browser.json" }],
  ],
  use: {
    baseURL,
    browserName: "chromium",
    channel: process.env.CI ? undefined : "chrome",
    viewport: { width: 1920, height: 1080 },
    trace: "on",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run start -- --hostname 127.0.0.1 --port 3107",
    url: baseURL,
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
