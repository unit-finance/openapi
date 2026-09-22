# Implemented API slices

From `spec-version.json` (`slices`), OpenAPI tags on `unit-finance/unit-openapi` **0.13.0**.

Accounts · Application Documents · Applications · Authorized Users ·
Card Fraud Outreach · Card Holder API Tokens · Cards · Check Deposits ·
Counterparties · Customers · Fees · Payments · Transactions

# Test skips and early exits

Templates: `templates/node/tests/`, `templates/java/tests/`,
`templates/ruby/spec/`, `templates/python/tests/`.

Not listed: the global token gate (`describeIfToken` / `assumeToken` /
`:sandbox` / `@requires_token`).

**Cards, Fees, Transactions** — no extra skip in any SDK.

**Card Holder API Tokens** `createCardholderTokenVerification` — no extra skip
in any SDK (the sandbox issues the OTP challenge and returns 201). Its sibling
`createCardholderToken` is the same abort in every SDK; see below.

**Card Fraud Outreach** `createPolicy` / `getPolicyById` / `updatePolicy` are
the same abort in every SDK; `listCardFraudCases` / `getCardFraudCaseById` /
`markCardFraudCaseAsFraud` / `markCardFraudCaseAsNoFraud` differ. See below.

**Authorized Users** `addAuthorizedUsers` / `removeAuthorizedUsers` — no extra
skip in any SDK (they return a customer resource and the typed clients parse
it). `listAuthorizedUsers` / `getAuthorizedUser` differ; see below.

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
| `cancelPayment` | abort on 400/409/422/501 | Creates a **book** payment (settles immediately). Cancel is only for Pending/PendingReview ACH/Wire, so those statuses count as a pass. |
| `createPolicy` | abort | Create needs three org-provisioned relationships: **email outreach settings**, **message outreach settings**, and **white-label theme**. There is no list operation for any of them, so the suite sends placeholder ids `"0"`. The sandbox then 4xxs (missing/invalid relationships). That is org setup, not an SDK gap. |
| `getPolicyById` / `updatePolicy` | abort | Both need a policy id. There is **no list-policies** operation, so they depend on **`createPolicy`**. Until the org has those outreach/theme resources, there is nothing to GET or PATCH. |
| `createCardholderToken` (new in spec 0.13.0) | abort | The spec marks `verificationToken` and `verificationCode` **required** on `CreateCardholderTokenData.attributes`, but they are only needed for 2FA scopes: the sandbox answers **201** to a scope-only body (`{ scope: "cards" }`). The generated models cannot express that body, and the 6-digit `verificationCode` is an OTP delivered to the card holder over SMS, so the suites can only send a placeholder — which the sandbox rejects with **404 `verification_failed`**. Spec defect owned by `unit-openapi`: make both fields optional. A second defect sits behind it — the 201 body's `data.type` is **`cardholderBearerToken`** while the spec enum says `cardholderToken`, so the strict-typed clients would fail to parse a success once the first fix lands. |

---

## Where SDKs differ

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
| **Abort** unless `UNIT_SANDBOX_ACH_DEBIT_PAYMENT_ID` is set, then POST clear. | Same as Node (env var). | Same as Node (env var). | **Hard skip.** Creating an ACH debit is **403** (“provide Plaid Processor Token”). Nested skip if create fails or status is not `Clearing`. |

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

### `listCardFraudCases` / `getCardFraudCaseById` / `markCardFraudCaseAsFraud` / `markCardFraudCaseAsNoFraud` (new in spec 0.12.0)

Card fraud cases are **inbound** (the suite cannot mint one). `listCardFraudCases` can return rows; get and mark then use the first Pending case. Two separate problems sit on top of that:

1. **Expired / already-decided cases** — listed rows are often `Expired` with `decision: Pending`. Mark-as-fraud then returns **410 Gone**. Treated as unavailable, not a failed request.
2. **Spec vs 200 body** — `FraudCaseCardActivityType` marks `updatedAt` **required**, but the sandbox **omits** it on Pending activities. Typed clients fail while **deserializing** a 200, not while sending the request. Get/mark also need an id from list, so they are blocked on the same defect in languages that cannot parse the list.

This is a spec defect owned by `unit-openapi`. Fix: make `FraudCaseCardActivityType.updatedAt` optional. Then drop the Java abort and the ruby/python raw-body reads.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Runs** list/get (axios does not validate `updatedAt`). **Abort** on mark when the sandbox returns 410/4xx for an expired or already-decided case. | **Abort.** Gson `JsonSyntaxException` on the 200 (`updatedAt` required, omitted). `listCasesOrSkip` returns null; get/mark never run. | **Runs (raw)** for list/get (`debug_return_type: 'String'`). Mark uses the raw list, then **aborts** on 410/4xx. | **Runs (raw)** for list/get (`*_without_preload_content`). Mark uses the raw list, then **aborts** on 410/4xx (and on typed-response validation). |

### `listAuthorizedUsers` / `getAuthorizedUser` (new in spec 0.11.0)

The operations are documented as JSON:API **resources**, and the sandbox
returns `{ type, id, attributes }` (list is an array of those). The spec
reuses `AuthorizedUserType` — the add-payload object with required
`fullName` / `email` / `phone` and **no** `type`/`id`/`attributes` — as the
list item and GET `data`. Typed clients therefore fail while
**deserializing** a 200, not while sending the request. `getAuthorizedUser`
also needs an id from list, so it is blocked on the same defect.

This is a spec defect owned by `unit-openapi`. Fix: introduce an
`AuthorizedUser` resource schema for list/get; keep `AuthorizedUserType` for
the add body. Then drop the Java abort and the ruby/python raw-body reads.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Runs.** Axios does not validate required response fields. | **Abort.** Gson `validateJsonElement` rejects a 200 that has `type`/`id`/`attributes` instead of `fullName`/`email`/`phone`. `assumeTrue` bails after the call. GET aborts for the same reason (no id on the typed list item). | **Runs (raw).** The typed model would raise, so the specs read the raw body via `debug_return_type: 'String'`. | **Runs (raw).** Pydantic would raise, so the tests read the raw body via `*_without_preload_content`. |

### Application Documents (whole slice, new in spec 0.10.0)

`ApplicationDocumentAttributes` marks `status`, `documentType`, `description`,
`name`, and `archived` **required**, but the sandbox returns them as **`null`**
for freshly created / pending documents (a custom document has `name: null`).
This is a spec defect owned by `unit-openapi`. How each SDK copes with the
document-returning operations differs:

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Runs.** Axios does not validate the body. | **Hard skip.** Gson's `validateJsonElement` rejects a JSON-null required field, throwing on the 200 before any assertion. All seven ITs `@Disabled`. | **Runs (raw).** The typed model raises `ArgumentError, 'name cannot be nil'`, so the specs read the raw body via `debug_return_type: 'String'`. | **Runs (raw).** `StrictStr`/oneOf validation raises, so the tests read the raw body via `*_without_preload_content`. |

Fix: make those `ApplicationDocumentAttributes` fields optional in the spec, then
drop the Java `@Disabled` and the ruby/python raw-body reads.

Behavior common to the SDKs that do call the API:

| Operation | How | Why |
| --- | --- | --- |
| `createApplicationDocument` | runs (201) | The spec documents **200**; the sandbox creates the resource and answers **201**, so the tests accept either. If the org does not offer custom documents the POST 4xx/5xxs and the test aborts. |
| `listApplicationDocuments` | runs | Lists documents on the shared business application; asserts the JSON:API list shape. |
| `uploadApplicationDocument` / `downloadApplicationDocument` | runs | Create a custom document, upload a front image, then (download) fetch it back. |
| `uploadApplicationDocumentBackSide` / `downloadApplicationDocumentBackSide` | abort | A custom (client-requested) document is single-sided, so the sandbox rejects a back-side upload (4xx). With no back-side file, the back-side download has nothing to fetch. Treated as feature-unavailable, not a failure. |
| `verifyApplicationDocument` | abort | Verify is only legal for a `SelfieVerification` document paired with a real IDV `jobId`. These suites can only create a custom document, so the call 4xx/5xxs and the test aborts. |

### Application create/get/update response `included[]` (spec 0.10.0)

The application create / `getById` / `updateApplication` responses now
compound-include `ApplicationDocument` resources in `included[]`, which carry
the same null-required-field defect above. This broke the existing
`getById` / `updateApplication` specs in the strict-typed languages:

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Runs.** Axios does not validate. | **Runs.** Passes in practice (the required documents are not yet generated when these ITs run in the single fast JVM, so `included[]` is empty). Will break if a document appears; same spec fix applies. | **Runs (raw).** `shared_app` + `get_by_id` + `update` specs read the raw body (`debug_return_type: 'String'`). | **Runs (raw).** `shared_app` + `test_get_by_id` + `test_update` read the raw body (`*_without_preload_content`). |

---

## Helpers that bypass the generated SDK

Not skips: setup code that talks to Unit **without** (or around) the typed client.

### Raw HTTP: `fundAccount` (all four languages)

| File | How |
| --- | --- |
| `templates/node/tests/helpers/funding.ts` | `fetch` `rawPost` |
| `templates/java/.../Funding.java` | `HttpURLConnection` |
| `templates/ruby/spec/helpers/funding.rb` | `Net::HTTP` |
| `templates/python/tests/helpers/funding.py` | `urllib.request` |

Two POSTs used to live here. **Card create now uses `CardsApi`** (same fixture as `sharedCard`). Raw HTTP remains only for:

1. **`POST /sandbox/atm-deposits`** — sandbox-only simulation. **Not in** `openapi.bundled.json`, so there is no SDK method. Needed so fees/holds/outbound payments are not `InsufficientFunds`.

`GET` account balance in the same helper uses `AccountsApi.getAccount`.

### Python check deposits: SDK, but untyped body

`templates/python/tests/helpers/check_deposits.py` uses `*_without_preload_content` and `json.loads` instead of Pydantic models. Spec types `CheckDepositAttributes.amount` as a **string**; sandbox returns an **integer** (cents). `StrictStr` would throw. Node/Java/Ruby coerce. Spec fix in `unit-openapi`; until then this is the Python-only kludge.

### List-transactions filter (all four)

Shared transaction helpers create a **book** payment, then list with a filter for `bookTransaction`. Funding’s ATM sim posts an `atmTransaction` whose body **omits `tags`**, which some generated models require. Tests avoid deserializing that ATM row.

### Other fixtures (not raw HTTP)

- Send-link still uses relationship ids **`"0"`** (see skips above).
- Check-deposit image uploads use a tiny in-memory JPEG, not a real scan.
