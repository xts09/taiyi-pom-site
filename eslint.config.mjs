import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".codex-run/**",
    ".gitnexus/**",
    // Generated promo/demo artifacts are not part of the Next.js app lint surface.
    "taiyi-pom-promo/**",
    "taiyi-pom-wear-promo/**",
  ]),
]);

export default eslintConfig;
