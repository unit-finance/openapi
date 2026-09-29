# Implemented API slices

From `spec-version.json` (`slices`), OpenAPI tags on `unit-finance/unit-openapi` **0.18.0**.

Accounts · Application Documents · Applications · Authorized Users ·
Card Fraud Outreach · Card Holder API Tokens · Cards · Cards ATM Locations ·
Cards Add To Mobile Wallet · Cards Authorization Requests · Cards Authorizations ·
Check Deposits · Check Payments · Counterparties · Credit Applications ·
Credit Decisions · Customers · DACA · Disputes · Fees · Institutions ·
Interest · Lending Programs · Payments · Positive Pay ·
Receivables Management · Transactions

# Test skips and early exits

Templates: `templates/node/tests/`, `templates/java/tests/`,
`templates/ruby/spec/`, `templates/python/tests/`.

Not listed: the global token gate (`describeIfToken` / `assumeToken` /
`:sandbox` / `@requires_token`).

**Cards, Cards ATM Locations, Fees, Transactions** — no extra skip in any SDK.

**Check Payments** `originateCheckPaymentMailPhysicalCheck` / `cancelCheckPayment`
are the same abort in every SDK; `listCheckPayments` / `getCheckPayment` /
`getCheckImage` / `returnCheckPayment` /
`approveCheckPaymentAdditionalVerification` differ. See below.

**Cards Add To Mobile Wallet** `getMobileWalletPayload` — no extra skip in any
SDK (the POST returns 200). The spec types `attributes.payload` as a **string**;
the sandbox returns an **object**. Node asserts the field is present; the
strict-typed clients still parse the envelope because `payload` is not
required. Spec defect owned by `unit-openapi`: type `payload` as an object (or
make it a free-form value).

**Card Holder API Tokens** `createCardholderTokenVerification` — no extra skip
in any SDK (the sandbox issues the OTP challenge and returns 201). Its sibling
`createCardholderToken` is the same abort in every SDK; see below.

**Card Fraud Outreach** `createPolicy` / `getPolicyById` / `updatePolicy` are
the same abort in every SDK; `listCardFraudCases` / `getCardFraudCaseById` /
`markCardFraudCaseAsFraud` / `markCardFraudCaseAsNoFraud` differ. See below.

**Authorized Users** `addAuthorizedUsers` / `removeAuthorizedUsers` — no extra
skip in any SDK (they return a customer resource and the typed clients parse
it). `listAuthorizedUsers` / `getAuthorizedUser` differ; see below.

**Cards Authorization Requests** `listAuthorizationRequests` /
`getAuthorizationRequestById` differ; see below.

**Cards Authorizations** `listAuthorizations` / `getAuthorization` /
`releaseAuthorization` differ; see below.

**Credit Applications** (new in spec 0.16.0) — all four operations **run** in
every SDK, but two API defects had to be worked around first; see below.
**Credit Decisions** `listCreditDecisions` / `getCreditDecision` run in every
SDK; `createCreditDecision` differs. See below.

**DACA · Institutions** (new in spec 0.17.0) — no extra skip in any SDK; all
four operations **run**. The three DACA transitions needed a hand-rolled
request body the spec does not describe; see below. **Disputes**
`listDisputes` runs in every SDK; `getDisputeById` is the same abort in every
SDK. See below.

**Interest · Lending Programs · Positive Pay · Receivables Management** (new in
spec 0.18.0) — the three Lending Programs operations and five of the six
Positive Pay operations **run** in every SDK. `configurePositivePayPolicy` is
the same **hard skip** everywhere (the sandbox does not serve the path).
`getTotalAccruedInterest` and the two Receivables reads **run** in every SDK but
need a raw-body read in the three strict-typed clients; see below.

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
| `listAtmLocations` (new in spec 0.14.0) | runs | GET `/atm-locations` with `filter[postalCode]=11375` returns 200 and a JSON:API array. |
| `originateCheckPaymentMailPhysicalCheck` (new in spec 0.15.0) | abort | The POST is valid (funded deposit account, US payee, future `sendDate`). The sandbox may **400/403** when mailed checks are off for the org bank agreement. Tests treat that as unavailable instead of failing. |
| `cancelCheckPayment` | abort | Cancel is only legal while status is **`Pending`**. The suite originates a future-dated check then POSTs cancel. A 4xx (already in production, feature off, or not pending) is treated as unavailable. |
| `getCreditApplication` / `getCreditDecision` (new in spec 0.16.0) | runs, with a header workaround | Both single-resource GETs answer **415** `content-type must be "application/vnd.api+json"` unless the request carries that **`Content-Type`** header — on a request with no body. The spec declares no request body for them, so no generated client sends one and every read fails out of the box. The suites pin the header on the credit clients only (node `baseOptions`, python `_headers`, ruby `header_params`, java `addDefaultHeader`). The sibling **list** endpoints do not require it. Defect owned by the API / `unit-openapi`: stop requiring a request content type on bodyless GETs, or declare it. |
| `listCreditApplications` / `listCreditDecisions` (new in spec 0.16.0) | runs | Plain paged reads; the sandbox org already has credit applications, and decisions accumulate as the suites create them. |
| `createCreditApplication` (new in spec 0.16.0) | runs, with two workarounds | `relationships.lendingProgram` is **required**, and this SDK surface has **no list-lending-programs operation**, so the suites borrow a program id off an existing credit application rather than guessing (`null` -> skip when the org has none). Separately, the spec declares `idempotencyKey` on the create attributes but the API answers **400 `"Field 'idempotencyKey' is not expected"`**, so the fixtures omit it. Spec defect owned by `unit-openapi`: drop `idempotencyKey` from the credit-application create attributes (its sibling on `createCreditDecision` **is** accepted). |
| `enterControlAgreement` / `activateControlAgreement` / `deactivateControlAgreement` (new in spec 0.17.0) | runs, with a hand-rolled body | The spec declares the request body as an **optional, untyped `object`**, so the generated clients take a bare `object` / `Object` / `Dict[str, Any]` / `opts[:body]` and there is no model to build. The API nevertheless **requires** it: omitting the body answers **400 `invalid_fields`** (`Field 'data' is required`), `data.type` is pinned to the constant **`updateDacaPoliciesRequest`**, and `data.relationships.account` is required. The fixtures therefore hand-roll the envelope in every SDK. Spec defect owned by `unit-openapi`: model this request body instead of `type: object`. Ordering is also enforced by the API — activate requires the account to be **`Entered`** and deactivate requires **`Activated`**, otherwise it returns 400 `invalid_daca_status_transition` — so each suite mints its **own dedicated deposit account** and walks it through the prior transitions rather than sharing one, keeping the run order-independent. |
| `listDisputes` (new in spec 0.17.0) | runs | Plain paged read; the sandbox org already has disputes. |
| `getDisputeById` (new in spec 0.17.0) | abort | Needs an existing dispute id. Disputes are opened by **Unit operations**, not through the API — this surface exposes only list and get, with **no create-dispute operation** — so the suites read the first id off `listDisputes` and bail when the org has none. |
| `getByRoutingNumber` (new in spec 0.17.0) | runs | GET `/institutions/{routingNumber}` with the shared account's routing number returns 200. The `institution` resource is keyed by routing number and carries **no JSON:API `id`**; the spec marks `id` optional, so the strict-typed clients still parse the envelope and the tests assert `type` plus the attribute keys instead. |
| `listLendingPrograms` / `getLendingProgramById` / `getLendingProgramExtendedInformationById` (new in spec 0.18.0) | runs | Plain reads; the sandbox org already has lending programs, and the two by-id reads take the first id off the list (`null` -> abort when the org has none). `LendingProgram.type` is deliberately **open-ended** in the spec (the sandbox returns `receivablesRetentionProgram`, `clientSponsoredChargeCardProgram`, ...), so the tests assert the field is present rather than pinning a literal. Note this list operation is what `createCreditApplication` was missing before 0.18.0, but it is **not** usable there: it returns programs of every kind and only a credit-capable one is accepted, so that suite still borrows its id off an existing credit application. |
| `createPositivePay` (new in spec 0.18.0) | runs | All three request variants (`checkPaymentPositivePay`, `receivedAchDebitPositivePay`, `drawdownPositivePay`) return **201** against the shared account. The check-payment and ACH-debit variants are created `Active`; the drawdown variant is created **`AwaitingDocuments`**, which matters for the upload below. |
| `listPositivePay` / `getPositivePayById` (new in spec 0.18.0) | runs | Plain reads. Because the org starts with no rules, each read-suite **mints its own rule** rather than sharing one — `cancel` and the document upload both mutate rule state, so a shared rule would make the run order-dependent. |
| `cancelPositivePay` (new in spec 0.18.0) | runs, asserting **201** | The spec documents **200** for this operation but the sandbox answers **201**. Node/Java/Ruby still get a parsed body and assert 201 directly; Python's generated client only maps a body for the documented 200, so the typed call returns `data=None` and the test reads the raw body instead. Spec defect owned by `unit-openapi`: document 201 (or make the API return 200). |
| `uploadPositivePayDocument` (new in spec 0.18.0) | runs, drawdown only | The upload is only accepted for a rule in **`AwaitingDocuments`**, which only the **drawdown** variant enters — the check-payment variant answers **400 `Document upload activation not supported for this positive pay type`**. Each suite therefore creates a dedicated drawdown rule and PUTs a minimal PDF, which flips it to `Active`. The spec declares **no response content**, so Java and Node type the body as `void`/`Void` even though the sandbox returns the activated rule; Java asserts status only, Node and Python read the body untyped. Spec defect owned by `unit-openapi`: declare the 200 response schema. |
| `configurePositivePayPolicy` (new in spec 0.18.0) | hard skip | The sandbox does not route `POST /positive-pay-policy` at all: a spec-valid request answers **404 "Please check the path, we don't serve any resource at the specified path"**. The operation exists only in the spec, so there is nothing to exercise. Fix lives in the sandbox (serve the path) or in `unit-openapi` (drop the operation). |
| `getTotalAccruedInterest` (new in spec 0.18.0) | runs, via raw body in three SDKs | Two separate problems. **Request:** the spec types every filter as a plain `string` and its own example shows `2024-03`, but the API rejects a missing range with **400** ("provide either a since/until or a sinceInterestMonth/untilInterestMonth range"), rejects `YYYY-MM-DD` with **400 `Invalid value`**, and the `sinceInterestMonth`/`untilInterestMonth` pair simply **never responds** (the request hangs past any client timeout). Only full ISO-8601 instants on `filter[since]`/`filter[until]` work, and only over a **narrow window** — a multi-month range also hangs — so the fixtures use a rolling one-day window. **Response:** the spec types `data` as a bare `{ amount }` object, but the sandbox returns a full JSON:API resource (`{ type: "totalAccruedInterest", attributes: { amount } }`). The typed `amount` is therefore absent, which the strict clients reject outright (pydantic/gson "required field missing", Ruby "data cannot be nil"), so Python, Java and Ruby read the raw body. Spec defects owned by `unit-openapi`: model `data` as the JSON:API resource the API returns, and document the accepted datetime format. |
| `listReceivables` / `getReceivableById` (new in spec 0.18.0) | runs, via raw body in three SDKs | The spec marks `Receivable.attributes.originalAmount` and `remainingAmount` **required**, but the sandbox sends neither — it returns `totalPrincipal`, `remainingPrincipal`, `plan`, `totalInterest` and `remainingInterest` instead. The strict clients therefore fail while **deserializing** a 200 (Python matches neither arm of the response `oneOf`, Java's generated `validateJsonElement` throws, Ruby's `oneOf` builder returns nil and raises "data cannot be nil"). Node (axios) does not validate and reads the typed response directly; Python, Java and Ruby read the raw body so they still assert the same envelope. `getReceivableById` additionally takes the first id off the list and aborts when the org has none — receivables are produced by Unit's lending flows, with no create operation on this surface. Spec defect owned by `unit-openapi`: align `ReceivableAttributes` with what the API actually returns. |
| `updateCreditApplication` (new in spec 0.16.0) | runs | PATCHes the underwriting attributes of a **dedicated** application the suite creates for this test alone, so it never mutates an unrelated org resource. It cannot share the application the other credit suites use: `createCreditDecision` records an approved decision, flipping that application to `Approved`, and the API then rejects the PATCH with 400 `not_supported_for_credit_application_status` ("Credit application cannot be patched when status is Approved"). Sharing made the run order-dependent — it passed under jest/pytest/rspec alphabetical collection but failed on CI for Java, where Surefire's default `filesystem` order ran the decision first. The fallback path likewise only accepts a listed application still in `Pending`. |

---

## Where SDKs differ

### `listCheckPayments` / `getCheckPayment` / `getCheckImage` / `returnCheckPayment` / `approveCheckPaymentAdditionalVerification` (new in spec 0.15.0)

`CheckPayment.attributes.counterparty` is marked **required**. Historical
inbound rows from `GET /check-payments` often **omit** it, so typed clients
fail while **deserializing** a 200 list. Node axios does not validate that
field, so list **runs**. Get uses an originated id when create succeeded;
typed get/originate can still abort if the 201/200 omits `counterparty`.

`getCheckImage` needs a produced **printed** or **deposited** JPEG. A freshly
originated check has neither, so the sandbox **404s**. `returnCheckPayment` is
for inbound checks still inside `returnCutoffTime`, not originated mailed
checks. `approveCheckPaymentAdditionalVerification` needs
`additionalVerificationStatus=Required`. Those three **abort** on 4xx in every
SDK.

Spec defect owned by `unit-openapi`: make `CheckPayment.attributes.counterparty`
optional. Then drop the Java abort and the ruby skip / python abort on list/get.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Runs** list. **Abort** get/image/return/approve when originate is unavailable or the call 4xxs. | **Abort** list (`counterparty` required, omitted). Get **aborts** if originate failed or Gson rejects the 200. Image/return/approve **abort** on 4xx. | **Skip** list when the Ruby model raises (`counterparty cannot be nil`). Get **skips** on the same deserialize error. Image/return/approve **abort** on 4xx. | **Abort** list/get when Pydantic rejects the 200. Image/return/approve **abort** on 4xx. |

### `listAuthorizationRequests` / `getAuthorizationRequestById` (new in spec 0.14.0)

Authorization requests are **inbound** (Purchase Approval intercepts a card
auth; the suite cannot mint one). `listAuthorizationRequests` can return rows;
GET then uses the first id. An empty list is normal. When rows exist, two spec
defects owned by `unit-openapi` break the typed clients while **deserializing**
a 200:

1. `PurchaseAuthorizationRequest` / sibling variants mark `tags` **required**;
   the sandbox **omits** it.
2. Java's generated `oneOf` then matches **0** of
   `purchaseAuthorizationRequest` / `cardTransactionAuthorizationRequest` /
   `atmAuthorizationRequest`.

Fix: make `tags` optional on the authorization-request attribute objects. Then
drop the Java abort and the ruby skip / python abort.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Runs** list. **Abort** GET if the list is empty. Axios does not validate `tags`. | **Abort** list (`oneOf` 0 matches / `tags` omitted). GET **aborts** if list is empty or the typed list cannot yield an id; otherwise GET **runs**. | **Skip** list when the Ruby model raises (`tags cannot be nil`). GET **aborts** if empty, **skips** if the typed list/GET raises. | **Abort** list/GET when Pydantic rejects the 200. **Skip** GET if the list is empty. |

### `listAuthorizations` / `getAuthorization` / `releaseAuthorization` (new in spec 0.14.0)

Authorizations are also **inbound** (a card purchase). The sandbox org already
has historical rows, so list is not empty — but `Authorization.attributes.tags`
is marked **required** and the sandbox **omits** it. Typed clients fail while
deserializing the 200, so get/release never run in those languages. Node axios
does not validate `tags`, so list/get **run**. Release is only legal while
status is `Authorized`; a listed row can still **403**, which Node treats as
unavailable rather than a failed request.

This is a spec defect owned by `unit-openapi`. Fix: make
`Authorization.attributes.tags` optional. Then drop the Java abort and the
ruby skip / python abort.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Runs** list/get. **Abort** release on 4xx (403 here: not releasable). | **Abort.** Gson `validateJsonElement` rejects a 200 (`tags` required, omitted). Get/release never run. | **Skip** when the Ruby model raises (`tags cannot be nil`). | **Abort** when Pydantic rejects the 200. **Skip** get/release if the (typed) list is empty. |

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

### `createCreditDecision` (new in spec 0.16.0)

The decision timestamps (`submissionTimestamp`, `decisionTimestamp`) are the
pickiest field on this API. It accepts **only** `YYYY-MM-DDTHH:MM:SS.sssZ` —
exactly three fractional digits and a literal `Z` — and answers a bare **400
“Please check the request payload and try again”** for every other RFC 3339
spelling of the same instant. Verified against the sandbox: `.078Z` **201**,
`.07898Z` **400**, no fraction **400**, `.078+00:00` **400**.

That turns a `format: date-time` field into a trap for any generated client
that serializes date-times its own way. Node and Ruby build the string by hand,
so they are unaffected. Java serializes `OffsetDateTime` with
`ISO_OFFSET_DATE_TIME`, which prints microseconds — the fixture truncates to
milliseconds (and nudges an exact second by 1ms so the fraction is not dropped
entirely). Python types the field as `datetime`, and the generated
`ApiClient.sanitize_for_serialization` used `isoformat()`, which sends
`.348000+00:00`. `scripts/openapi/prepare-python-sdk.ts` now patches the
generated `api_client.py` after every regeneration so timezone-aware datetimes
go out as UTC `.sssZ`. This fixes the published SDK too, not just the suite.

Defect owned by the API / `unit-openapi`: accept any RFC 3339 instant, as the
`format: date-time` declaration promises. Then drop the Java truncation and the
Python `api_client.py` patch.

| Node | Java | Ruby | Python |
| --- | --- | --- | --- |
| **Runs**. Hand-built `toISOString()` is already `.sssZ`. | **Runs**, after truncating the `OffsetDateTime` to milliseconds. | **Runs**. Hand-built `strftime('%L')` + `Z`. | **Runs**. The patched `api_client.py` serializes aware datetimes as UTC `.sssZ`. |

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
