package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CheckDeposit;
import com.unit.finance.sdk.model.CreateCheckDeposit201Response;
import com.unit.finance.sdk.model.CreateCheckDepositSendLink201Response;
import java.io.File;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.util.Arrays;
import java.util.List;

/**
 * Check-deposit helpers, mirroring the Node {@code tests/helpers/checkDeposits.ts}.
 *
 * <p>Lazily provisions one check deposit (with both images uploaded) that the
 * read-only suites reuse, plus skip helpers for the state/feature-gated
 * transitions ({@code clear}/{@code confirm}/{@code send-link}).
 */
final class CheckDeposits {

  private CheckDeposits() {}

  // A minimal but structurally valid JPEG (SOI + APP0/JFIF header + EOI). The
  // image-upload endpoints only require an `image/jpeg` body, so this in-memory
  // stand-in avoids bundling a binary fixture.
  private static final byte[] JPEG_IMAGE_BYTES = {
    (byte) 0xFF, (byte) 0xD8, (byte) 0xFF, (byte) 0xE0, 0x00, 0x10, 0x4A, 0x46,
    0x49, 0x46, 0x00, 0x01, 0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00,
    (byte) 0xFF, (byte) 0xD9
  };

  // `clear` and `confirm` are only valid in specific states (`Clearing` and
  // `AwaitingCustomerConfirmation`) and `clear` additionally requires the
  // Dynamic Clearing Period feature; the sandbox signals the disabled feature
  // with a 500. None of these are deterministically reachable from a freshly
  // created deposit, so the transition suites treat those preconditions as
  // feature-unavailable (skip) rather than a failure -- the holds pattern.
  //
  // TODO(check-deposits): enable full (non-skipping) assertions for these
  // transitions once the sandbox can deterministically drive a deposit into the
  // required state. To turn these on:
  //   - clear: enable the Dynamic Clearing Period feature on the token's org
  //     bank agreement, drive the deposit to `Clearing` (upload both images and
  //     let it progress / simulate settlement), then drop 500 (and the 4xx
  //     precondition codes) from the skip set and assert the 200 body.
  //   - confirm: drive the deposit to `AwaitingCustomerConfirmation` (a
  //     duplicate-detection / needs-confirmation simulation) before asserting.
  //   - createCheckDepositSendLink: provision a white-label theme and an
  //     authorized user and pass their real ids (see
  //     Fixtures.createCheckDepositSendLinkRequest) instead of the "0"
  //     placeholders.
  // When enabling, replace the `assumeTrue(... != null, ...)` guards in the
  // corresponding ITs with a hard assertion.
  private static final List<Integer> SKIP_STATUSES = Arrays.asList(400, 403, 404, 409, 500);

  private static CheckDeposit cachedShared;

  /** A temp JPEG file suitable as an {@code image/jpeg} upload body. */
  static File jpegImageFile() {
    try {
      File file = File.createTempFile("check-deposit", ".jpg");
      file.deleteOnExit();
      Files.write(file.toPath(), JPEG_IMAGE_BYTES);
      return file;
    } catch (IOException e) {
      throw new UncheckedIOException(e);
    }
  }

  /** Create a check deposit on the shared account and return the resource. */
  static CheckDeposit create() throws ApiException, InterruptedException {
    SharedAccount shared = SharedAccount.get();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();
    ApiResponse<CreateCheckDeposit201Response> response =
        api.createCheckDepositWithHttpInfo(Fixtures.createCheckDepositRequest(shared.accountId));
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create check deposit: expected status 201, got " + response.getStatusCode());
    }
    return response.getData().getData();
  }

  /** Lazily provision a check deposit with both images uploaded. */
  static synchronized CheckDeposit getOrCreateShared() throws ApiException, InterruptedException {
    if (cachedShared == null) {
      CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();
      CheckDeposit created = create();
      api.uploadCheckDepositFrontImageWithHttpInfo(created.getId(), jpegImageFile());
      api.uploadCheckDepositBackImageWithHttpInfo(created.getId(), jpegImageFile());
      cachedShared = created;
    }
    return cachedShared;
  }

  static ApiResponse<CreateCheckDeposit201Response> clearOrSkip(CheckDepositsApi api, String id)
      throws ApiException {
    try {
      return api.clearCheckDepositWithHttpInfo(id, null);
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    }
  }

  static Integer confirmOrSkip(CheckDepositsApi api, String id) throws ApiException {
    try {
      return api.confirmCheckDepositDetailsWithHttpInfo(id, null).getStatusCode();
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    }
  }

  static ApiResponse<CreateCheckDepositSendLink201Response> createSendLinkOrSkip(CheckDepositsApi api)
      throws ApiException, InterruptedException {
    SharedAccount shared = SharedAccount.get();
    try {
      return api.createCheckDepositSendLinkWithHttpInfo(
          Fixtures.createCheckDepositSendLinkRequest(shared.accountId, "0", "0"));
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    }
  }
}
