package com.unit.finance.sdk.it;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

class CreateBatchReleasesIT {

  // Prerequisites: org-level batch account, receiver account mapping, and
  // sender metadata — not provisioned automatically in this sandbox suite.
  // Mirrors the Node `create-batch-releases.test.ts`, which is skipped.
  @Disabled("batch releases require org-level batch account configuration")
  @Test
  void returnsBatchReleaseResource() {}
}
