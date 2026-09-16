package com.unit.finance.sdk.it;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.api.CardsApi;
import com.unit.finance.sdk.model.AbstractOpenApiSchema;
import com.unit.finance.sdk.model.BusinessVirtualDebitCard;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.CreateCard201Response;
import com.unit.finance.sdk.model.DepositAccount;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

/**
 * Funds a sandbox deposit account so balance-dependent operations (fees, holds,
 * outbound payments) succeed instead of failing with {@code InsufficientFunds},
 * mirroring the Node {@code tests/helpers/funding.ts}.
 *
 * <p>The ATM deposit simulation is not in the OpenAPI spec, so it is called
 * with raw HTTP. The card the simulation matches against is created with
 * {@code CardsApi}.
 *
 * @see <a href="https://www.unit.co/docs/api/cards/simulations/#create-atm-deposit">ATM deposit simulation</a>
 */
final class Funding {

  private static final String JSON_API = "application/vnd.api+json";

  private Funding() {}

  /**
   * Ensure {@code accountId} holds at least {@code minimumBalance} cents,
   * funding it via a simulated ATM deposit if needed. A no-op when the balance
   * already suffices.
   */
  static void fundAccount(String accountId, int minimumBalance)
      throws ApiException, InterruptedException, IOException {
    if (accountBalance(accountId) >= minimumBalance) {
      return;
    }
    String last4 = createDebitCardLast4(accountId);
    simulateAtmDeposit(accountId, Math.max(minimumBalance * 10, 100_000), last4);

    for (int attempt = 0; attempt < 20; attempt++) {
      if (accountBalance(accountId) >= minimumBalance) {
        return;
      }
      ApiSupport.sleep(1000);
    }
    throw new IllegalStateException(
        "Account " + accountId + " did not reach balance " + minimumBalance + " after funding.");
  }

  private static int accountBalance(String accountId) throws ApiException {
    AccountsApi api = ApiSupport.buildAccountsApi();
    CreateAccount201Response response = api.getAccount(accountId, null, null);
    DepositAccount account = (DepositAccount) response.getData().getActualInstance();
    Integer balance = account.getAttributes().getBalance();
    return balance != null ? balance : 0;
  }

  /**
   * Create a business virtual debit card and return its last-4 digits. Virtual
   * debit cards are Active on creation, so the ATM simulation can match
   * immediately.
   */
  private static String createDebitCardLast4(String accountId) throws ApiException {
    CardsApi api = ApiSupport.buildCardsApi();
    CreateCard201Response created =
        api.createCard(Fixtures.createBusinessVirtualDebitCardRequest(accountId));
    Object instance = created.getData();
    if (instance instanceof AbstractOpenApiSchema) {
      instance = ((AbstractOpenApiSchema) instance).getActualInstance();
    }
    if (!(instance instanceof BusinessVirtualDebitCard)) {
      throw new IllegalStateException(
          "Expected businessVirtualDebitCard, got " + instance.getClass().getName());
    }
    String last4 =
        ((BusinessVirtualDebitCard) instance).getAttributes().getLast4Digits();
    if (last4 == null) {
      throw new IllegalStateException("Created card is missing last4Digits.");
    }
    return last4;
  }

  private static void simulateAtmDeposit(String accountId, int amount, String last4Digits)
      throws IOException {
    String body =
        "{\"data\":{\"type\":\"atmTransaction\",\"attributes\":{"
            + "\"amount\":"
            + amount
            + ","
            + "\"atmName\":\"SDK Test ATM\","
            + "\"atmLocation\":\"Cupertino, CA, US\","
            + "\"last4Digits\":\""
            + last4Digits
            + "\"},"
            + "\"relationships\":{\"account\":{\"data\":{"
            + "\"type\":\"depositAccount\",\"id\":\""
            + accountId
            + "\"}}}}}";
    rawPost("/sandbox/atm-deposits", body);
  }

  private static JsonObject rawPost(String pathname, String body) throws IOException {
    URL url = new URL(ApiSupport.BASE_PATH + pathname);
    HttpURLConnection connection = (HttpURLConnection) url.openConnection();
    connection.setRequestMethod("POST");
    connection.setDoOutput(true);
    connection.setRequestProperty("Authorization", "Bearer " + ApiSupport.TOKEN);
    connection.setRequestProperty("Content-Type", JSON_API);
    connection.setRequestProperty("Accept", JSON_API);
    connection.setConnectTimeout(30_000);
    connection.setReadTimeout(60_000);

    try (OutputStream out = connection.getOutputStream()) {
      out.write(body.getBytes(StandardCharsets.UTF_8));
    }

    int status = connection.getResponseCode();
    InputStream stream = status >= 400 ? connection.getErrorStream() : connection.getInputStream();
    String responseBody = readAll(stream);
    if (status >= 400) {
      throw new IOException("POST " + pathname + " -> HTTP " + status + ": " + responseBody);
    }
    return JsonParser.parseString(responseBody).getAsJsonObject();
  }

  private static String readAll(InputStream stream) throws IOException {
    if (stream == null) {
      return "";
    }
    try (InputStream in = stream) {
      ByteArrayOutputStream buffer = new ByteArrayOutputStream();
      byte[] chunk = new byte[4096];
      int read;
      while ((read = in.read(chunk)) != -1) {
        buffer.write(chunk, 0, read);
      }
      return new String(buffer.toByteArray(), StandardCharsets.UTF_8);
    }
  }
}
