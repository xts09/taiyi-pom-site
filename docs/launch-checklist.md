# Launch Checklist

## Before Deploying

- Check the team's live Deployment Storage and Functions Storage usage before
  starting a build. Record the allowance, current usage, retained production
  versions, and stale previews. If usage is at or above its allowance, resolve
  retention or cleanup before creating another deployment. Local screenshots
  and test artifacts are excluded by `.gitignore` and `.vercelignore`; this does
  not exclude retained Vercel build output.
- Choose the production release path before triggering deployments. A validated
  preview can be promoted without a new build only when its build-time settings
  and environment are suitable for production. Otherwise use a production build
  and include cleanup of its superseded preview in the release plan. Preserve
  the live production version and a verified rollback version. Confirm aliases
  and obtain the required deletion authorization before removing a deployment;
  do not treat deployment deletion as equivalent to clearing a local cache.
- Review the project's actual retention policy and its exceptions after cleanup.
  A shorter retention period does not immediately remove newly created previews
  or protected production versions. Verify the live usage after cleanup instead
  of assuming that a deletion has reclaimed a specific number of bytes.

- `.github/workflows/quality.yml` checks each push to the maintained branch
  and each pull request. It records the checked SHA, runs `prepublish:check`,
  then runs `test:release` against that checkout's production build. Download
  the `release-quality-<sha>` artifact for logs, browser traces and screenshots.
  Require the quality job to pass for the exact release SHA; an earlier green
  commit or a Vercel Ready state is not equivalent evidence.
- `npm run test:release` requires a completed production build and a free
  port 3107. It starts and stops its own production server; it does not reuse
  the development server on port 3000. Run local release verification in a
  clean checkout of the target SHA so unrelated working changes are excluded.
- This workflow supplies a commit check; branch-protection requirements and
  Vercel promotion rules are separate repository/project settings. Do not
  claim automatic deployment blocking unless those settings are verified.
  Browser fixtures simulate inquiry responses and block external analytics;
  they do not verify live email delivery or Google ingestion.

- Vercel uses the repository's `vercel.json` build command,
  `npm run prepublish:check`, for both preview and production builds. Catalog
  validation, catalog SEO checks, lint, type checking, and unit tests must pass
  before the production build. Keep this gate in the build path when changing
  deployment settings; do not replace it with a build-only command.
- Record the changed routes and the actual deployment date when releasing SEO
  or content changes. Compare subsequent search and inquiry data against that
  release record; a local implementation date is not a deployment date.
- Copy `.env.example` to `.env.local` and replace every required blank value.
- Run `npm run launch:env-check` before creating a production build.
- Run `npm run launch:check` for the full environment, catalog, SEO, lint,
  type, test, and production-build gate.
- Production prerendering uses one worker and one page at a time in
  `next.config.ts` to bound memory use for the multilingual catalogue. Keep
  TypeScript checks and the full static route set enabled. Run builds and
  browser verification sequentially on memory-constrained machines, and check
  available memory before starting another build after an out-of-memory exit.
- Configure production variables from `.env.example`; never commit real secrets.
- Confirm `NEXT_PUBLIC_SITE_URL=https://www.taiyipolymer.com`.
- Set `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `RESEND_API_KEY`.
- Verify the `CONTACT_FROM_EMAIL` domain in Resend and publish the required
  SPF/DKIM DNS records before sending a real inquiry.
- Set Google measurement, Ads, and site-verification variables when available.
- Before enabling a production rate limit, obtain approval for Vercel's metered
  WAF usage. Create an `Inquiry endpoint rate limit` rule with `Request Path`
  equal to `/api/inquiry`, a fixed 10-minute window, a limit of 5 requests per
  IP, and a final `429` action. Start with Vercel's recommended Log-only
  observation pass, review live traffic, then publish the blocking rule.
- Keep `.env*`, local logs, browser state, and verification screenshots out of Git.

## Production Verification

- Confirm HTTPS and that the app-level `308` from the apex host to the preferred
  `www` host agrees with the deployment provider's domain redirect.
- Check `/robots.txt`, `/sitemap.xml`, one product page, one application page,
  one resource page, and `/technical-data-sheets`.
- Submit a real inquiry and verify delivery, reply-to behavior, success state,
  and failure state.
- Confirm the inquiry endpoint returns `503` when delivery configuration is
  absent and `502` when the email provider rejects a request.
- Confirm the Vercel Firewall records `/api/inquiry` traffic and returns `429`
  only after the approved production threshold is exceeded.
- Confirm product aliases return `308` to their canonical grade URL.

## Search Launch

- Verify the domain in Google Search Console.
- Submit `https://www.taiyipolymer.com/sitemap.xml`.
- Inspect the home page, POM category, conductive/antistatic landing page, and
  the highest-priority grade pages.
- Review indexing and query data before expanding or suppressing more grade pages.
