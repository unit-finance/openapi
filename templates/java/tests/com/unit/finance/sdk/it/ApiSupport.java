package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.api.FeesApi;
import com.unit.finance.sdk.model.BusinessApplication;
import com.unit.finance.sdk.model.DepositAccount;
import com.unit.finance.sdk.model.IndividualApplication;
import com.unit.finance.sdk.model.List200ResponseDataInner;
import com.unit.finance.sdk.model.ListAccounts200ResponseDataInner;
import com.unit.finance.sdk.model.Relationship;
import com.unit.finance.sdk.model.ResourceIdentifier;
import java.util.List;
import io.github.cdimascio.dotenv.Dotenv;
import java.io.File;

/**
 * Shared helpers for the sandbox integration suite, mirroring the Node
 * {@code tests/helpers/api.ts}.
 *
 * <p>A bearer token is read from {@code UNIT_SANDBOX_TOKEN} — either the
 * process environment or a {@code .env} file (see {@code .env.example}). If
 * unset, every suite is skipped via {@link #assumeToken()} (JUnit 5 aborts,
 * it does not fail), so the run still exits 0 on machines without sandbox
 * credentials.
 */
final class ApiSupport {

  /**
   * The nearest {@code .env}, located by walking up from the working directory
   * (the Maven module dir when run via Surefire) and loaded with the
   * dotenv-java library — added to the SDK's {@code pom.xml} by
   * {@code scripts/openapi/prepare-java-sdk.ts}. Real process environment
   * variables always take precedence over file entries (see {@link #env}).
   */
  private static final Dotenv DOTENV = loadDotenv();

  static final String TOKEN = env("UNIT_SANDBOX_TOKEN");

  static final String BASE_PATH =
      env("UNIT_SANDBOX_BASE_URL") != null ? env("UNIT_SANDBOX_BASE_URL") : "https://api.s.unit.sh";

  /** Stable id for this run; stamped into created applications' tags. */
  static final String TEST_RUN_ID =
      "sdk-java-"
          + Long.toString(System.currentTimeMillis(), 36)
          + "-"
          + Integer.toString((int) (Math.random() * 0x1000000), 36);

  private ApiSupport() {}

  static boolean hasToken() {
    return TOKEN != null && !TOKEN.isEmpty();
  }

  /** Aborts (skips) the current test when no sandbox token is configured. */
  static void assumeToken() {
    assumeTrue(hasToken(), "UNIT_SANDBOX_TOKEN not set; skipping sandbox integration test.");
  }

  /**
   * Resolve a config value, preferring a real environment variable and
   * falling back to the {@code .env} file. Returns {@code null} when neither
   * source provides a non-empty value.
   */
  static String env(String key) {
    String fromEnv = System.getenv(key);
    if (fromEnv != null && !fromEnv.isEmpty()) {
      return fromEnv;
    }
    String fromFile = DOTENV.get(key);
    return (fromFile != null && !fromFile.isEmpty()) ? fromFile : null;
  }

  /**
   * Locate the nearest {@code .env} by walking up from the working directory
   * and load it via dotenv-java. A missing file is ignored, so the suite
   * simply relies on the process environment.
   */
  private static Dotenv loadDotenv() {
    String dir = System.getProperty("user.dir", ".");
    for (File d = new File(dir); d != null; d = d.getParentFile()) {
      if (new File(d, ".env").isFile()) {
        dir = d.getAbsolutePath();
        break;
      }
    }
    return Dotenv.configure().directory(dir).ignoreIfMissing().load();
  }

  /** Construct an {@code ApplicationsApi} bound to the sandbox. */
  static ApplicationsApi buildApi() {
    return buildApplicationsApi();
  }

  /** Construct an {@code ApplicationsApi} bound to the sandbox. */
  static ApplicationsApi buildApplicationsApi() {
    return new ApplicationsApi(apiClient());
  }

  /** Construct an {@code AccountsApi} bound to the sandbox. */
  static AccountsApi buildAccountsApi() {
    return new AccountsApi(apiClient());
  }

  /** Construct a {@code FeesApi} bound to the sandbox. */
  static FeesApi buildFeesApi() {
    return new FeesApi(apiClient());
  }

  private static ApiClient apiClient() {
    if (!hasToken()) {
      throw new IllegalStateException(
          "UNIT_SANDBOX_TOKEN is required to talk to the sandbox; set it in the shell.");
    }
    ApiClient client = new ApiClient();
    client.setBasePath(BASE_PATH);
    client.setBearerToken(TOKEN);
    // OkHttp defaults to a 10s read timeout, which the sandbox occasionally
    // exceeds (notably the list endpoint). Use generous timeouts so a slow
    // sandbox response is not mistaken for a failure.
    client.setConnectTimeout(30_000);
    client.setReadTimeout(60_000);
    client.setWriteTimeout(60_000);
    return client;
  }

  /**
   * The {@code data} of list/get/cancel responses is a JSON:API {@code oneOf}
   * wrapper ({@link List200ResponseDataInner}). Resolve its JSON:API
   * {@code type} discriminator regardless of which variant matched.
   */
  static String resourceType(List200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof BusinessApplication) {
      return ((BusinessApplication) actual).getType().getValue();
    }
    if (actual instanceof IndividualApplication) {
      return ((IndividualApplication) actual).getType().getValue();
    }
    return null;
  }

  /** Resolve the {@code id} of a {@link List200ResponseDataInner} wrapper. */
  static String resourceId(List200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof BusinessApplication) {
      return ((BusinessApplication) actual).getId();
    }
    if (actual instanceof IndividualApplication) {
      return ((IndividualApplication) actual).getId();
    }
    return null;
  }

  /** Resolve the JSON:API {@code type} of an account list/get response wrapper. */
  static String accountResourceType(ListAccounts200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof DepositAccount) {
      return ((DepositAccount) actual).getType().getValue();
    }
    return null;
  }

  /** Resolve the {@code id} of a {@link ListAccounts200ResponseDataInner} wrapper. */
  static String accountResourceId(ListAccounts200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof DepositAccount) {
      return ((DepositAccount) actual).getId();
    }
    return null;
  }

  /** Resolve a deposit account from a {@link ListAccounts200ResponseDataInner} wrapper. */
  static DepositAccount depositAccount(ListAccounts200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof DepositAccount) {
      return (DepositAccount) actual;
    }
    return null;
  }

  static String customerIdFromBusinessApplication(BusinessApplication app) {
    return customerIdFromRelationship(
        app.getRelationships() != null ? app.getRelationships().getCustomer() : null);
  }

  static String customerIdFromIndividualApplication(IndividualApplication app) {
    return customerIdFromRelationship(
        app.getRelationships() != null ? app.getRelationships().getCustomer() : null);
  }

  private static String customerIdFromRelationship(Relationship relationship) {
    if (relationship == null || relationship.getData() == null) {
      return null;
    }
    Object actual = relationship.getData().getActualInstance();
    if (actual instanceof ResourceIdentifier) {
      return ((ResourceIdentifier) actual).getId();
    }
    if (actual instanceof List) {
      List<?> items = (List<?>) actual;
      if (!items.isEmpty() && items.get(0) instanceof ResourceIdentifier) {
        return ((ResourceIdentifier) items.get(0)).getId();
      }
    }
    return null;
  }
}
