import assert from "node:assert/strict";
import test from "node:test";

import {
  ENGINEERING_GF_DIRECTION,
  engineeringGfPolymers,
  findEngineeringGfLandingByDirection,
  getEngineeringGfLandingPath,
  getEngineeringGfLandingRegistration,
  listEngineeringGfLandingRegistrations,
} from "../src/data/engineeringGfLandingRegistry.ts";
import { getResourcePage } from "../src/data/resources.ts";
import {
  isReleaseSurfaceEnabledForPath,
  isSourceReleaseIndexable,
} from "../src/i18n/releaseManifest.ts";

test("engineering GF registrations own unique paths and valid relationships", () => {
  const registrations = listEngineeringGfLandingRegistrations();

  assert.deepEqual(
    registrations.map(({ polymer }) => polymer),
    [...engineeringGfPolymers],
  );
  assert.equal(
    new Set(registrations.map(({ slug }) => slug)).size,
    registrations.length,
  );
  assert.equal(
    new Set(registrations.map(({ path }) => path)).size,
    registrations.length,
  );

  for (const registration of registrations) {
    assert.equal(
      registration.path,
      getEngineeringGfLandingPath(registration.polymer),
    );
    assert.deepEqual(
      getEngineeringGfLandingRegistration(registration.polymer),
      registration,
    );
    assert.notEqual(registration.compareWith, registration.polymer);
    assert.ok(
      registration.compareWith &&
        getEngineeringGfLandingRegistration(registration.compareWith),
    );
    for (const guideId of registration.guideIds) {
      assert.ok(getResourcePage(guideId), guideId);
    }
    assert.deepEqual(
      findEngineeringGfLandingByDirection(
        registration.polymer,
        ENGINEERING_GF_DIRECTION,
      ),
      registration,
    );
  }
});

test("release surfaces remain explicit and fail closed", () => {
  for (const { path } of listEngineeringGfLandingRegistrations()) {
    assert.equal(isSourceReleaseIndexable(path), true);
    assert.equal(
      isReleaseSurfaceEnabledForPath(path, "publicNavigation"),
      true,
    );
    assert.equal(
      isReleaseSurfaceEnabledForPath(path, "includeInSitemap"),
      true,
    );
  }

  const unapprovedPath =
    "/products/categories/glass-fiber-reinforced-unapproved-compound";
  assert.equal(isSourceReleaseIndexable(unapprovedPath), false);
  assert.equal(
    isReleaseSurfaceEnabledForPath(unapprovedPath, "publicNavigation"),
    false,
  );
  assert.equal(
    isReleaseSurfaceEnabledForPath(unapprovedPath, "includeInSitemap"),
    false,
  );
});
