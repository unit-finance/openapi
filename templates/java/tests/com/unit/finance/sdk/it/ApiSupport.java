package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.api.FeesApi;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ACHPayment;
import com.unit.finance.sdk.model.BookPayment;
import com.unit.finance.sdk.model.BusinessApplication;
import com.unit.finance.sdk.model.CancelPayment200ResponseData;
import com.unit.finance.sdk.model.CreatePayment201ResponseData;
import com.unit.finance.sdk.model.CreditAccount;
import com.unit.finance.sdk.model.DepositAccount;
import com.unit.finance.sdk.model.Fee;
import com.unit.finance.sdk.model.FeeRelationships;
import com.unit.finance.sdk.model.IndividualApplication;
import com.unit.finance.sdk.model.List200ResponseDataInner;
import com.unit.finance.sdk.model.ListAccounts200ResponseDataInner;
import com.unit.finance.sdk.model.ACHReceivedPayment;
import com.unit.finance.sdk.model.ListReceivedPayments200ResponseDataInner;
import com.unit.finance.sdk.model.ListRecurringPayments200ResponseDataInner;
import com.unit.finance.sdk.model.RealtimeReceivedPayment;
import com.unit.finance.sdk.model.RecurringCreditBookPayment;
import com.unit.finance.sdk.model.RecurringCreditACHPayment;
import com.unit.finance.sdk.model.RecurringDebitACHPayment;
import com.unit.finance.sdk.model.Relationship;
import com.unit.finance.sdk.model.RelationshipData;
import com.unit.finance.sdk.model.ReopenAccount200ResponseData;
import com.unit.finance.sdk.model.UpdatePayment200ResponseData;
import com.unit.finance.sdk.model.WalletAccount;
import com.unit.finance.sdk.model.WirePayment;
import java.util.Map;
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

  private static ApiClient sandboxClient() {
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

  /** Construct an {@code ApplicationsApi} bound to the sandbox. */
  static ApplicationsApi buildApi() {
    return new ApplicationsApi(sandboxClient());
  }

  static AccountsApi buildAccountsApi() {
    return new AccountsApi(sandboxClient());
  }

  static FeesApi buildFeesApi() {
    return new FeesApi(sandboxClient());
  }

  static PaymentsApi buildPaymentsApi() {
    return new PaymentsApi(sandboxClient());
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

  static String accountId(ListAccounts200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof DepositAccount) {
      return ((DepositAccount) actual).getId();
    }
    if (actual instanceof CreditAccount) {
      return ((CreditAccount) actual).getId();
    }
    if (actual instanceof WalletAccount) {
      return ((WalletAccount) actual).getId();
    }
    return null;
  }

  static String accountType(ListAccounts200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof DepositAccount) {
      return ((DepositAccount) actual).getType().getValue();
    }
    if (actual instanceof CreditAccount) {
      return ((CreditAccount) actual).getType().getValue();
    }
    if (actual instanceof WalletAccount) {
      return ((WalletAccount) actual).getType().getValue();
    }
    return null;
  }

  static DepositAccount asDepositAccount(ListAccounts200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    return actual instanceof DepositAccount ? (DepositAccount) actual : null;
  }

  static DepositAccount asDepositAccount(ReopenAccount200ResponseData data) {
    Object actual = data.getActualInstance();
    return actual instanceof DepositAccount ? (DepositAccount) actual : null;
  }

  static String paymentId(CreatePayment201ResponseData data) {
    Object actual = data.getActualInstance();
    if (actual instanceof BookPayment) {
      return ((BookPayment) actual).getId();
    }
    if (actual instanceof ACHPayment) {
      return ((ACHPayment) actual).getId();
    }
    if (actual instanceof WirePayment) {
      return ((WirePayment) actual).getId();
    }
    return null;
  }

  static String paymentType(CreatePayment201ResponseData data) {
    Object actual = data.getActualInstance();
    if (actual instanceof BookPayment) {
      return ((BookPayment) actual).getType().getValue();
    }
    if (actual instanceof ACHPayment) {
      return ((ACHPayment) actual).getType().getValue();
    }
    if (actual instanceof WirePayment) {
      return ((WirePayment) actual).getType().getValue();
    }
    return null;
  }

  static String paymentId(UpdatePayment200ResponseData data) {
    Object actual = data.getActualInstance();
    if (actual instanceof BookPayment) {
      return ((BookPayment) actual).getId();
    }
    if (actual instanceof ACHPayment) {
      return ((ACHPayment) actual).getId();
    }
    return null;
  }

  static String paymentType(UpdatePayment200ResponseData data) {
    Object actual = data.getActualInstance();
    if (actual instanceof BookPayment) {
      return ((BookPayment) actual).getType().getValue();
    }
    if (actual instanceof ACHPayment) {
      return ((ACHPayment) actual).getType().getValue();
    }
    return null;
  }

  static String paymentId(CancelPayment200ResponseData data) {
    Object actual = data.getActualInstance();
    if (actual instanceof ACHPayment) {
      return ((ACHPayment) actual).getId();
    }
    if (actual instanceof WirePayment) {
      return ((WirePayment) actual).getId();
    }
    return null;
  }

  static String paymentType(CancelPayment200ResponseData data) {
    Object actual = data.getActualInstance();
    if (actual instanceof ACHPayment) {
      return ((ACHPayment) actual).getType().getValue();
    }
    if (actual instanceof WirePayment) {
      return ((WirePayment) actual).getType().getValue();
    }
    return null;
  }

  static String recurringPaymentId(ListRecurringPayments200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof RecurringCreditBookPayment) {
      return ((RecurringCreditBookPayment) actual).getId();
    }
    if (actual instanceof RecurringCreditACHPayment) {
      return ((RecurringCreditACHPayment) actual).getId();
    }
    if (actual instanceof RecurringDebitACHPayment) {
      return ((RecurringDebitACHPayment) actual).getId();
    }
    return null;
  }

  static String recurringPaymentType(ListRecurringPayments200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof RecurringCreditBookPayment) {
      return ((RecurringCreditBookPayment) actual).getType().getValue();
    }
    if (actual instanceof RecurringCreditACHPayment) {
      return ((RecurringCreditACHPayment) actual).getType().getValue();
    }
    if (actual instanceof RecurringDebitACHPayment) {
      return ((RecurringDebitACHPayment) actual).getType().getValue();
    }
    return null;
  }

  static String receivedPaymentId(ListReceivedPayments200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof ACHReceivedPayment) {
      return ((ACHReceivedPayment) actual).getId();
    }
    if (actual instanceof RealtimeReceivedPayment) {
      return ((RealtimeReceivedPayment) actual).getId();
    }
    return null;
  }

  static String receivedPaymentType(ListReceivedPayments200ResponseDataInner data) {
    Object actual = data.getActualInstance();
    if (actual instanceof ACHReceivedPayment) {
      return ((ACHReceivedPayment) actual).getType().getValue();
    }
    if (actual instanceof RealtimeReceivedPayment) {
      return ((RealtimeReceivedPayment) actual).getType().getValue();
    }
    return null;
  }

  /** Resolve a related resource id from a {@link Relationship}, if present. */
  static String relationshipId(Relationship relationship) {
    if (relationship == null || relationship.getData() == null) {
      return null;
    }
    RelationshipData data = relationship.getData();
    Object actual = data.getActualInstance();
    if (actual instanceof com.unit.finance.sdk.model.ResourceIdentifier) {
      return ((com.unit.finance.sdk.model.ResourceIdentifier) actual).getId();
    }
    return null;
  }

  /**
   * Fee create responses expose the originating transaction via
   * {@code relationships.transaction}, which is not a declared OpenAPI field on
   * {@link FeeRelationships} but is preserved in {@code additionalProperties}.
   */
  @SuppressWarnings("unchecked")
  static String feeTransactionId(Fee fee) {
    FeeRelationships rels = fee.getRelationships();
    if (rels == null) {
      return null;
    }
    Object tx = rels.getAdditionalProperty("transaction");
    if (tx instanceof Relationship) {
      return relationshipId((Relationship) tx);
    }
    if (tx instanceof Map) {
      Object data = ((Map<String, Object>) tx).get("data");
      if (data instanceof Map) {
        return (String) ((Map<String, Object>) data).get("id");
      }
    }
    return null;
  }
}
