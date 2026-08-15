import assert from "node:assert/strict";
import test from "node:test";

import { createInquiryHandler } from "../src/lib/inquiry.ts";
import {
  clampInquiryMessage,
  inquiryMessageMaxLength,
} from "../src/lib/inquiryLimits.ts";

const endpoint = "https://www.taiyipolymer.com/api/inquiry";
const validPayload = {
  company: "Example Plastics",
  email: "engineer@example.com",
  material: "Modified POM Compounds",
  application: "Precision gear",
  message: "Please review wear and dimensional stability.",
};

const createRequest = (payload = validPayload, headers = {}) =>
  new Request(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(payload),
  });

test("returns a service error when email delivery is not configured", async () => {
  const handler = createInquiryHandler({
    contactEmail: "sales@example.com",
  });
  const response = await handler(createRequest());

  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), {
    delivered: false,
    fallback: true,
    message: "Server email delivery is not configured.",
  });
});

test("delivers a valid inquiry with reply-to context", async () => {
  let resendRequest;
  const handler = createInquiryHandler({
    contactEmail: "sales@example.com",
    resendApiKey: "re_test_key",
    resendFromEmail: "Taiyi Polymer <inquiries@example.com>",
    fetchImpl: async (input, init) => {
      resendRequest = { input, init };
      return new Response(null, { status: 200 });
    },
  });
  const response = await handler(createRequest());

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    delivered: true,
    fallback: false,
  });
  assert.equal(resendRequest.input, "https://api.resend.com/emails");
  assert.equal(resendRequest.init.method, "POST");
  assert.equal(resendRequest.init.headers.Authorization, "Bearer re_test_key");

  const body = JSON.parse(resendRequest.init.body);
  assert.equal(body.to, "sales@example.com");
  assert.equal(body.reply_to, validPayload.email);
  assert.match(body.subject, /Example Plastics/);
  assert.match(body.text, /Precision gear/);
});

test("returns a gateway error when Resend rejects delivery", async () => {
  const handler = createInquiryHandler({
    contactEmail: "sales@example.com",
    resendApiKey: "re_test_key",
    resendFromEmail: "inquiries@example.com",
    fetchImpl: async () => new Response(null, { status: 422 }),
  });
  const response = await handler(createRequest());

  assert.equal(response.status, 502);
  assert.equal((await response.json()).fallback, true);
});

test("validates required inquiry fields before delivery", async () => {
  const handler = createInquiryHandler({
    contactEmail: "sales@example.com",
  });
  const response = await handler(
    createRequest({ ...validPayload, application: "" }),
  );

  assert.equal(response.status, 400);
  assert.match((await response.json()).message, /application/);
});

test("rejects requirement details above the shared length limit", async () => {
  const handler = createInquiryHandler({
    contactEmail: "sales@example.com",
  });
  const response = await handler(
    createRequest({
      ...validPayload,
      message: "x".repeat(inquiryMessageMaxLength + 1),
    }),
  );

  assert.equal(response.status, 400);
  assert.match((await response.json()).message, /2000 characters or fewer/);
});

test("clamps client-side requirement details to the shared length limit", () => {
  assert.equal(
    clampInquiryMessage("x".repeat(inquiryMessageMaxLength + 1)).length,
    inquiryMessageMaxLength,
  );
  assert.equal(clampInquiryMessage("short requirement"), "short requirement");
});

test("silently accepts honeypot submissions without sending email", async () => {
  let fetchCalled = false;
  const handler = createInquiryHandler({
    contactEmail: "sales@example.com",
    resendApiKey: "re_test_key",
    resendFromEmail: "inquiries@example.com",
    fetchImpl: async () => {
      fetchCalled = true;
      return new Response(null, { status: 200 });
    },
  });
  const response = await handler(
    createRequest({ ...validPayload, website: "spam.example" }),
  );

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    delivered: true,
    spamFiltered: true,
  });
  assert.equal(fetchCalled, false);
});

test("rate limits repeated requests from the same forwarded address", async () => {
  const handler = createInquiryHandler({
    contactEmail: "sales@example.com",
  });

  for (let index = 0; index < 5; index += 1) {
    const response = await handler(
      createRequest(validPayload, { "X-Forwarded-For": "203.0.113.10" }),
    );
    assert.equal(response.status, 503);
  }

  const limitedResponse = await handler(
    createRequest(validPayload, { "X-Forwarded-For": "203.0.113.10" }),
  );
  assert.equal(limitedResponse.status, 429);
});
