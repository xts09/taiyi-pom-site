# Launch Checklist

## Before Deploying

- Run `npm run prepublish:check`.
- Confirm `NEXT_PUBLIC_SITE_URL=https://www.taiyipom.com`.
- Set `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `RESEND_API_KEY`.
- Set Google measurement, Ads, and site-verification variables when available.
- Keep `.env*`, local logs, browser state, and verification screenshots out of Git.

## Production Verification

- Confirm HTTPS and the preferred `www` host redirect consistently.
- Check `/robots.txt`, `/sitemap.xml`, one product page, one application page,
  one resource page, and `/technical-data-sheets`.
- Submit a real inquiry and verify delivery, reply-to behavior, success state,
  and failure state.
- Confirm product aliases return `308` to their canonical grade URL.

## Search Launch

- Verify the domain in Google Search Console.
- Submit `https://www.taiyipom.com/sitemap.xml`.
- Inspect the home page, POM category, conductive/antistatic landing page, and
  the highest-priority grade pages.
- Review indexing and query data before expanding or suppressing more grade pages.
