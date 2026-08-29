# Internal traffic and Google Analytics

Google tags load only on `www.taiyipolymer.com`. Local development, deployment
previews, and other hostnames do not send Google Analytics or Google Ads data.

## Exclude a team browser

Open this URL once in each browser or browser profile used by the team:

```text
https://www.taiyipolymer.com/?ga_internal=1
```

The site stores the preference in that browser, removes existing `_ga` cookies,
and keeps Google tags disabled on later visits. The query parameter is removed
from the address bar after it is processed.

To restore analytics for that browser, open:

```text
https://www.taiyipolymer.com/?ga_internal=0
```

Private browsing profiles and browsers whose site storage is cleared must run
the exclusion link again.

## Add the GA4 office IP filter

The browser switch covers changing home, mobile, and VPN addresses. For a fixed
office public IP, also define internal traffic in GA4 and create an Internal
Traffic exclusion data filter. Keep the filter in Testing first; activate it
only after the matching traffic appears in the Test data filter name dimension.
