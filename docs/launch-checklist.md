# Launch Checklist

## Before Deploying

- Copy `.env.example` to `.env.local` and replace every required blank value.
- Run `npm run launch:env-check` before creating a production build.
- Run `npm run launch:check` for the full environment, catalog, SEO, lint,
  type, test, and production-build gate.
- Configure production variables from `.env.example`; never commit real secrets.
- Confirm `NEXT_PUBLIC_SITE_URL=https://www.taiyipolymer.com`.
- Set `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `RESEND_API_KEY`.
- Verify the `CONTACT_FROM_EMAIL` domain in Resend and publish the required
  SPF/DKIM DNS records before sending a real inquiry.
- Set Google measurement, Ads, and site-verification variables when available.
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
- Confirm product aliases return `308` to their canonical grade URL.

## Search Launch

- Verify the domain in Google Search Console.
- Submit `https://www.taiyipolymer.com/sitemap.xml`.
- Inspect the home page, POM category, conductive/antistatic landing page, and
  the highest-priority grade pages.
- Review indexing and query data before expanding or suppressing more grade pages.
