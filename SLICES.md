# Implemented API slices

From `spec-version.json` (`slices`), OpenAPI tags on `unit-finance/unit-openapi` **0.9.0**.

Accounts · Applications · Cards · Check Deposits · Counterparties · Customers ·
Fees · Payments · Transactions

# Test skips and early exits

Templates: `templates/node/tests/`, `templates/java/tests/`,
`templates/ruby/spec/`, `templates/python/tests/`.

Not listed: the global token gate (`describeIfToken` / `assumeToken` /
`:sandbox` / `@requires_token`).

**Cards, Fees, Transactions** — no extra skip in any SDK.

| Mark | Meaning |
| --- | --- |
| **hard skip** | Test never calls the API (`it.skip`, `@Disabled`, RSpec/`pytest` skip). |
| **abort** | Calls or tries, then bails (early `return` / `next` / `assumeTrue`). |
| **runs** | Asserts; missing data is a failure, not a skip. |

---

## Same in all four SDKs

| Operation | How | Why |
| --- | --- | --- |
| `createAccountHold` | abort | The POST is valid. The sandbox replies **400** and the error body names `enableHoldOnAccounts`. That is a **bank-agreement flag on the org behind `UNIT_SANDBOX_TOKEN`**, not a bug in the request or SDK. The API cannot turn the flag on, so the suite treats “holds not offered for this org” as unavailable instead of failing. |
| `releaseAccountHold` / `getAccountHoldById` | abort | Both need an existing hold id. Fix **`createAccountHold`** first (`enableHoldOnAccounts`); until then there is nothing to release or GET. |
| `clearCheckDeposit` | abort | The suite creates a deposit and uploads both images, then calls clear. Clear is only legal while the deposit is in **`Clearing`**, and that path also needs the org bank-agreement flag **Dynamic Clearing Period**. A fresh sandbox deposit never reaches that state, so the API returns **4xx** (wrong state) or **500** (feature off). Tests treat those as unavailable instead of failing. |
| `confirmCheckDepositDetails` | abort | Confirm is only legal in **`AwaitingCustomerConfirmation`** (duplicate / needs-confirmation). The suite has no sandbox simulation that drives a deposit into that state, so the call 4xx/500s and the test aborts. |
| `createCheckDepositSendLink` | abort | Send-link needs three relationships: account, **white-label theme**, and **authorized user**. A typical sandbox org does not provision the last two, so the tests send placeholder ids `"0"`. The API then 4xx/500s (missing/invalid relationships). That is org setup plus dummy ids, not an SDK gap. |
| `getCounterpartyBalance` | abort | Tests create an **ACH counterparty** (routing + account number). Balance is only stored for **Plaid-linked** counterparties. GET therefore returns **400 or 404**. The suite cannot mint a Plaid token, so it treats that as the wrong counterparty kind rather than a failed request. |
| `createBusinessWalletCustomer` | hard skip | The create body hard-codes `bankName: "Thread"`. This org has no partner bank by that name (**404** “bank was not found”). Which banks exist is org config; this SDK surface has no list-banks operation, so the test is skipped instead of guessing another name. |
| `archiveCustomer` | hard skip | Spec type `customerArchive`; sandbox wants `archiveCustomer`. |

---

## Where SDKs differ

### `updateBusinessBeneficialOwner`

The PATCH needs a beneficial-owner id. Create-application does **not** compound-include owners (`included[]` is empty); tests read `relationships.beneficialOwners.data[0].id` from the shared business application. A business application is supposed to always have at least one owner.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Runs.** Missing id is an assertion failure (envelope/relationship bug). | **Abort** if that relationship id is missing. | **Skip** if missing. | **Skip** if missing. |

### `updateBusinessCustomerOfficer`

The PATCH succeeds. The 200 body **omits** `Officer.attributes.status`, but the spec marks `status` **required**. Typed clients fail while **deserializing** the response, not while sending the request.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Runs.** Axios does not validate required response fields. | **Hard skip.** Gson throws on the 200. | **Hard skip.** Ruby model raises. | **Hard skip.** Python model raises. |

Fix: make `Officer.attributes.status` optional in the OpenAPI spec, then drop the skips.

### `createBatchReleases`

Batch release is an org-level product: a dedicated **batch account**, **receiver-account mapping**, and **sender metadata**. None of that is created by these suites, so Node / Java / Ruby never call the API.

Python has the same org gap **and** a spec/SDK mismatch: `CreateBatchReleasesRequest` models `data` as a **single object**, but the sandbox expects an **array** (400, pointer `/data`, “should be array”). Even with a batch-configured org, the generated Python client cannot send a legal body until the spec types `data` as an array.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Hard skip.** Empty test; org batch config not provisioned. | **Hard skip.** Same. | **Hard skip.** Same. | **Hard skip.** Same org gap, plus `data` object vs array. |

### `clearAchDebitPayment`

Clear is only valid for an **ACH debit** already in **`Clearing`**, and that state needs **Dynamic Clearing Period** on the org. The generated SDKs have **no list-payments** operation, so tests cannot search for a clearable debit.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Abort** unless `UNIT_SANDBOX_ACH_DEBIT_PAYMENT_ID` is set, then POST clear. | Creates a **book** payment (not an ACH debit) and **aborts** when clear throws. | Same as Node (env var). | **Hard skip.** Creating an ACH debit is **403** (“provide Plaid Processor Token”). Nested skip if create fails or status is not `Clearing`. |

### `cancelPayment`

Cancel is only valid for payments still **Pending** or **PendingReview** (typically ACH/Wire). **Book** payments in this sandbox **settle immediately**, so cancel after create is expected to fail.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| Creates a **book** payment, then cancel. **400 / 409 / 422 / 501** count as a pass (wrong state, or 501 if cancel is unimplemented for the type). | Same as Node. | Same as Node. | **Hard skip.** Creates an **ACH** payment instead; sandbox returns **500** on cancel. Revisit once cancel of a fresh ACH is specified/fixed. |

### `getReceivedPayment` / `updateReceivedPayment`

Received payments are **inbound** (someone pays this org). The suites do not create them; they `listReceivedPayments` and then GET/PATCH the first row. An empty list is normal for a quiet sandbox, not an SDK bug.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Abort** if the list is empty (still a passing test). | **Abort** if empty. | **Skip** if empty. | **Skip** if empty. |

### `getWireDrawdown` / `sendDrawdownPayment`

Wire drawdowns are also **inbound** (a counterparty requests funds). Tests list existing drawdowns, then GET or send. There is no create-drawdown in these suites, so an empty list means nothing to fetch or send.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Abort** if `listWireDrawdowns` is empty. | **Abort** if empty. | **Abort** if empty. | **Skip** if empty. |

### `listStoreLocations`

GET store locations near a postal code (cash-deposit barcode stores). Two separate problems:

1. **Sandbox 500** — a valid query (`postalCode` + `serviceType=Barcode`) often returns **500** for this org. Treated as the cash-deposit-store feature being off, not a bad client.
2. **Spec vs 200 body** — when the endpoint does return 200, typed clients still fail to parse `StoreLocation`:
   - Java: `distance` is **required** in the spec; sandbox **omits** it.
   - Ruby: `attributes.phone` is **required**; sandbox **omits** it.
   - Python: `phone` is generated as a **`PhoneType` object**; sandbox sends a **bare string**.
   Node axios does not validate required fields, so it only hits problem (1).

That table is **only** `listStoreLocations` — what each SDK does **today** when the list call fails:

| SDK | What the test does |
| --- | --- |
| **Node** | Calls list. On **500**, returns early (pass). On 200, asserts the array (axios does not check `distance` / `phone`). |
| **Java** | Does **not** call list. `@Disabled` because even a 200 cannot be parsed (`distance` required, omitted). The 500 handling in the method never runs until that skip is removed. |
| **Ruby** | Calls list. On **500**, returns early. On 200, if the Ruby model throws (`phone` missing), **skip**. |
| **Python** | Does **not** call list. `@pytest.mark.skip` because `phone` is a `PhoneType` object in the model and the sandbox sends a **string**. |

### `generateCashDepositBarcode` / `getCashDepositBarcodeImage`

These are **not** extra store-list bugs. They **depend on** `listStoreLocations` (need a `storeId`), then POST generate, then (image only) GET the PNG.

If list 500s, returns empty, or cannot deserialize, generate and image **never run**. Node (and Ruby, if list works) can also abort if **generate itself 500s**.

Fix list (spec + sandbox 500) first; then these two can be asserted for real.

### `getRecurringPayment`

Node, Java, and Python **create** a recurring book payment, then GET it (no skip). Ruby only lists existing ones and **skips** if the list is empty.
