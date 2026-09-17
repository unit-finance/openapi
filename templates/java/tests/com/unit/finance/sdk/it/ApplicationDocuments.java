package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;
import com.unit.finance.sdk.model.CreateApplicationDocument200Response;
import java.io.File;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.util.LinkedHashMap;

/**
 * Application-document helpers, mirroring the Node
 * {@code tests/helpers/applicationDocuments.ts}.
 *
 * <p>The only document these suites can deterministically create is a custom
 * (client-requested) document via {@code createApplicationDocument}; the
 * Unit-required documents appear only while an application is
 * {@code AwaitingDocuments}, a magic-SSN-dependent state we do not control.
 *
 * <p>Note: the {@code ApplicationDocument}-returning operations are
 * {@code @Disabled} at the IT level because the sandbox returns
 * {@code ApplicationDocumentAttributes} required fields (e.g. {@code name}) as
 * JSON {@code null}, and the generated Gson {@code validateJsonElement} rejects
 * a null-valued required field (it must be a JSON primitive), throwing before
 * any assertion can run. This is a spec defect owned by the {@code unit-openapi}
 * repo. These helpers are kept so the ITs compile and can be re-enabled once
 * the spec marks those fields optional.
 */
final class ApplicationDocuments {

  private ApplicationDocuments() {}

  // A minimal but structurally valid JPEG (SOI + APP0/JFIF header + EOI).
  private static final byte[] JPEG_IMAGE_BYTES = {
    (byte) 0xFF, (byte) 0xD8, (byte) 0xFF, (byte) 0xE0, 0x00, 0x10, 0x4A, 0x46,
    0x49, 0x46, 0x00, 0x01, 0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00,
    (byte) 0xFF, (byte) 0xD9
  };

  /** A temp JPEG file suitable as an {@code image/jpeg} upload body. */
  static File jpegImageFile() {
    try {
      File file = File.createTempFile("application-document", ".jpg");
      file.deleteOnExit();
      Files.write(file.toPath(), JPEG_IMAGE_BYTES);
      return file;
    } catch (IOException e) {
      throw new UncheckedIOException(e);
    }
  }

  /** Create a custom application document and return its id. */
  static String createCustomDocument(String applicationId) throws ApiException {
    ApplicationDocumentsApi api = ApiSupport.buildApplicationDocumentsApi();
    CreateApplicationDocument200Response body =
        api.createApplicationDocument(applicationId, new LinkedHashMap<>());
    return body.getData().getId();
  }
}
