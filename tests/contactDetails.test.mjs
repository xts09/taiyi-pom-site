import assert from "node:assert/strict";
import test from "node:test";

import {
  contactEmail,
  contactPhoneCompactDisplay,
  contactPhoneDisplay,
  contactTelephoneHref,
  contactWhatsAppUrl,
} from "../src/lib/contactDetails.ts";

test("keeps the canonical sales contact values stable", () => {
  assert.equal(contactEmail, "xiatianshi@jstynm.com");
  assert.equal(contactPhoneDisplay, "+86 187 9641 8919");
  assert.equal(contactPhoneCompactDisplay, "+86 18796418919");
  assert.equal(contactTelephoneHref, "tel:+8618796418919");
  assert.equal(contactWhatsAppUrl, "https://wa.me/8618796418919");
});
