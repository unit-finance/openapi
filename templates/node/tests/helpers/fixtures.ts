import type {
	AddAuthorizedUsersRequest,
	ArchiveCustomerRequest,
	AuthorizedUserType,
	ApproveCheckPaymentAdditionalVerificationRequest,
	CreateCheckDepositRequest,
	CreateCheckDepositSendLinkRequest,
	OriginateCheckPaymentMailPhysicalCheckRequest,
	ReturnCheckPaymentRequest,
	CreatePolicyRequest,
	UpdateCheckDepositRequest,
	CreateBusinessApplicationRequest,
	CreateBusinessDebitCardRequest,
	CreateBusinessVirtualDebitCardRequest,
	CreateBusinessWalletCustomerRequest,
	CreateCardholderTokenRequest,
	CreateCardholderTokenVerificationRequest,
	GetMobileWalletPayloadRequest,
	CreateCounterpartyRequest,
	CreateCreditApplicationRequest,
	CreateCreditDecisionRequest,
	UpdateCreditApplicationRequest,
	CreateIndividualApplicationRequest,
	CreateSoleProprietorApplicationRequest,
	FreezeCardRequest,
	ReplaceCardRequest,
	UpdateBusinessApplicationRequest,
	UpdateBusinessBeneficialOwnerRequest,
	UpdateBusinessCustomerOfficerRequest,
	UpdateCardRequest,
	UpdateCounterpartyRequest,
	MarkCardFraudCaseAsFraudRequest,
	RemoveAuthorizedUsersRequest,
	UpdateCustomerRequest,
	UpdatePolicyRequest,
} from "../..";
import {
	BusinessAnnualRevenueType,
	BusinessNumberOfEmployeesType,
	SoleProprietorAnnualRevenueType,
	SoleProprietorNumberOfEmployeesType,
} from "../..";
import { TEST_RUN_ID } from "./api";

// Every builder below returns a freshly-constructed object graph. These
// helpers are factories (not shared constants) so that a test mutating a
// nested attribute of a built request can never leak into another test's
// fixture.
const usAddress = () => ({
	street: "20 Ingram St",
	city: "Forest Hills",
	state: "NY",
	postalCode: "11375",
	country: "US",
});

const usPhone = () => ({ countryCode: "1", number: "5555555555" });

const fullName = () => ({ first: "Peter", last: "Parker" });

const baseTags = () => ({ testRun: TEST_RUN_ID });

const businessContact = () => ({
	fullName: fullName(),
	email: `peter+${TEST_RUN_ID}@oscorp.com`,
	phone: usPhone(),
});

const officer = () => ({
	fullName: fullName(),
	dateOfBirth: "2001-08-15",
	title: "CEO",
	ssn: "721074426",
	email: `peter+${TEST_RUN_ID}@oscorp.com`,
	phone: usPhone(),
	address: usAddress(),
});

const beneficialOwners = () => [
	{
		fullName: { first: "Mary Jane", last: "Watson" },
		dateOfBirth: "2001-08-15",
		ssn: "574567625",
		email: `mj+${TEST_RUN_ID}@oscorp.com`,
		phone: usPhone(),
		address: usAddress(),
		percentage: 60,
	},
];

export function buildBusinessApplicationRequest(): CreateBusinessApplicationRequest {
	return {
		data: {
			type: "businessApplication",
			attributes: {
				name: `Pied Piper ${TEST_RUN_ID}`,
				address: usAddress(),
				phone: usPhone(),
				stateOfIncorporation: "DE",
				ein: "123456789",
				entityType: "Corporation",
				yearOfIncorporation: "2020",
				countriesOfOperation: ["US"],
				businessVertical: "TechnologyMediaOrTelecom",
				website: "https://www.piedpiper.com",
				contact: businessContact(),
				officer: officer(),
				beneficialOwners: beneficialOwners(),
				annualRevenue: BusinessAnnualRevenueType.Between500kAnd1m,
				numberOfEmployees: BusinessNumberOfEmployeesType.Between50And100,
				cashFlow: "Predictable",
				tags: baseTags(),
			},
		},
	};
}

export function buildIndividualApplicationRequest(): CreateIndividualApplicationRequest {
	return {
		data: {
			type: "individualApplication",
			attributes: {
				// Either `ssn` or `passport` is required, never both — sending
				// `passport: ""` alongside `ssn` makes the sandbox's
				// discriminator-validator fall off the individualApplication
				// branch and report a misleading `/data/type` error. Same goes
				// for `nationality`, which is only meaningful with `passport`.
				ssn: "721074426",
				fullName: fullName(),
				dateOfBirth: "2001-08-15",
				address: usAddress(),
				phone: usPhone(),
				email: `peter+${TEST_RUN_ID}@oscorp.com`,
				occupation: "ArchitectOrEngineer",
				annualIncome: "Between50kAnd100k",
				sourceOfIncome: "EmploymentOrPayrollIncome",
				tags: baseTags(),
			},
		},
	};
}

/**
 * Individual application that the sandbox lands in `AwaitingDocuments`
 * (applicant SSN `000000003`), a non-terminal state that can be canceled.
 * Business applications auto-approve in the sandbox even with a magic officer
 * SSN, so the cancel flow exercises an individual applicant instead.
 *
 * See https://docs.unit.co/api/applications/simulations#simulate-application-statuses
 */
export function buildCancelableIndividualApplicationRequest(): CreateIndividualApplicationRequest {
	const req = buildIndividualApplicationRequest();
	req.data.attributes.ssn = "000000003";
	return req;
}

/**
 * Sole proprietor uses the `individualApplication` discriminator value but a
 * distinct attribute set: `soleProprietorship: true` plus business-style
 * fields (annualRevenue, numberOfEmployees, businessVertical, ein). Sole
 * proprietors are evaluated as individuals, so they use the SoleProprietor*
 * revenue/employee buckets rather than the business-scale buckets used in
 * buildBusinessApplicationRequest; the SDK splits these into distinct enum
 * types per entity kind.
 */
export function buildSoleProprietorApplicationRequest(): CreateSoleProprietorApplicationRequest {
	return {
		data: {
			type: "individualApplication",
			attributes: {
				ssn: "721074426",
				fullName: fullName(),
				dateOfBirth: "2001-08-15",
				address: usAddress(),
				phone: usPhone(),
				email: `peter+${TEST_RUN_ID}@oscorp.com`,
				soleProprietorship: true,
				ein: "123456789",
				dba: `Pied Piper SP ${TEST_RUN_ID}`,
				businessVertical: "TechnologyMediaOrTelecom",
				annualRevenue: SoleProprietorAnnualRevenueType.Between100kAnd200k,
				numberOfEmployees: SoleProprietorNumberOfEmployeesType.Between2And5,
				website: "https://www.piedpiper.com",
				tags: baseTags(),
			},
		},
	};
}

export function buildUpdateBusinessApplicationRequest(): UpdateBusinessApplicationRequest {
	return {
		data: {
			type: "businessApplication",
			attributes: {
				tags: { ...baseTags(), updated: "true" },
			},
		},
	};
}

export function buildUpdateBusinessBeneficialOwnerRequest(
	applicationId: string,
): UpdateBusinessBeneficialOwnerRequest {
	return {
		data: {
			type: "beneficialOwner",
			attributes: { occupation: "ArchitectOrEngineer" },
			relationships: {
				application: {
					data: { type: "businessApplication", id: applicationId },
				},
			},
		},
	};
}

export function buildDepositAccountRequestForCustomer(customerId: string) {
	return buildCreateDepositAccountRequest(customerId);
}

export function buildCreateDepositAccountRequest(customerId: string) {
	return {
		data: {
			type: "depositAccount" as const,
			attributes: {
				depositProduct: "checking",
				tags: baseTags(),
			},
			relationships: {
				customer: { data: { type: "customer", id: customerId } },
			},
		},
	};
}

export function buildUpdateDepositAccountRequest() {
	return {
		data: {
			type: "depositAccount" as const,
			attributes: {
				tags: { ...baseTags(), updated: "true" },
			},
		},
	};
}

export function buildCloseDepositAccountRequest() {
	return {
		data: {
			type: "depositAccountClose" as const,
			attributes: { reason: "ByCustomer" },
		},
	};
}

export function buildFreezeDepositAccountRequest() {
	return {
		data: {
			type: "accountFreeze" as const,
			attributes: { reason: "Other", reasonText: "SDK integration test freeze" },
		},
	};
}

export function buildCreateFeeRequest(accountId: string) {
	return {
		data: {
			type: "fee" as const,
			attributes: {
				amount: 100,
				description: "SDK integration test fee",
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
			},
		},
	};
}

export function buildReverseFeeRequest(accountId: string, transactionId: string) {
	return {
		data: {
			type: "feeReversal" as const,
			attributes: {
				description: "SDK integration test fee reversal",
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
				transaction: { data: { type: "transaction", id: transactionId } },
			},
		},
	};
}

// The spec marks `idempotencyKey` optional on both hold requests, but the
// sandbox rejects them with a 400 unless it is present. Each call gets a fresh
// key so that separately-built holds are never collapsed into one another.
export function buildCreateAccountHoldRequest(accountId: string) {
	return {
		data: {
			type: "accountHold" as const,
			attributes: {
				amount: 500,
				description: "SDK integration test hold",
				idempotencyKey: `${TEST_RUN_ID}-hold-${Math.random().toString(36).slice(2, 10)}`,
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
			},
		},
	};
}

export function buildReleaseAccountHoldRequest(amount = 500) {
	return {
		data: {
			type: "accountHold" as const,
			attributes: { amount },
		},
	};
}

export function buildCreateBookPaymentRequest(
	accountId: string,
	counterpartyAccountId: string,
) {
	return {
		data: {
			type: "bookPayment" as const,
			attributes: {
				amount: 100,
				description: "SDK integration test book payment",
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
				counterpartyAccount: {
					data: { type: "account", id: counterpartyAccountId },
				},
			},
		},
	};
}

export function buildCreateBulkPaymentRequest(
	accountId: string,
	counterpartyAccountId: string,
) {
	return {
		data: [buildCreateBookPaymentRequest(accountId, counterpartyAccountId).data],
	};
}

export function buildUpdateBookPaymentRequest() {
	return {
		data: {
			type: "bookPayment" as const,
			attributes: {
				tags: { ...baseTags(), updated: "true" },
			},
		},
	};
}

export function buildGetExpectedAchCompletionDateRequest(accountId: string) {
	return {
		data: {
			type: "achExpectedCompletionDate" as const,
			attributes: {
				direction: "Credit" as const,
				amount: 1000,
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
			},
		},
	};
}

export function buildCreateRecurringBookPaymentRequest(
	accountId: string,
	counterpartyAccountId: string,
) {
	const start = new Date();
	start.setUTCDate(start.getUTCDate() + 7);
	const end = new Date(start);
	end.setUTCMonth(end.getUTCMonth() + 3);
	return {
		data: {
			type: "recurringCreditBookPayment" as const,
			attributes: {
				amount: 100,
				description: "SDK integration test recurring payment",
				schedule: {
					startTime: start.toISOString().slice(0, 10),
					endTime: end.toISOString().slice(0, 10),
					interval: "Monthly",
					dayOfMonth: 15,
				},
				tags: baseTags(),
				idempotencyKey: `${TEST_RUN_ID}-recurring`,
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
				counterpartyAccount: {
					data: { type: "account", id: counterpartyAccountId },
				},
			},
		},
	};
}

export function buildUpdateReceivedPaymentRequest() {
	return {
		data: {
			type: "achReceivedPayment" as const,
			attributes: {
				tags: { ...baseTags(), updated: "true" },
			},
		},
	};
}

export function buildGenerateCashDepositBarcodeRequest(
	storeId: string,
	customerId: string,
	accountId: string,
) {
	return {
		data: {
			type: "cashDepositBarcode" as const,
			attributes: { storeId },
			relationships: {
				customer: { data: { type: "customer", id: customerId } },
				// The cash-deposit-barcode account relationship must use the
				// generic "account" resource type; the sandbox rejects
				// "depositAccount" here with a 400 on /data/relationships/account/data/type.
				account: { data: { type: "account", id: accountId } },
			},
		},
	};
}

// A business debit card is a physical card issued against a deposit account.
// The card holder's identity mirrors the officer fixture used elsewhere.
// Physical debit cards support the full lifecycle (freeze, close, replace,
// report lost/stolen, limits, PIN status, update), so a single variant covers
// every Cards operation.
export function buildCreateBusinessDebitCardRequest(
	accountId: string,
): CreateBusinessDebitCardRequest {
	return {
		data: {
			type: "businessDebitCard",
			attributes: {
				fullName: fullName(),
				dateOfBirth: "2001-08-15",
				address: usAddress(),
				phone: usPhone(),
				email: `peter+${TEST_RUN_ID}@oscorp.com`,
				ssn: "721074426",
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
			},
		},
	};
}

// A business virtual debit card is issued Active immediately (physical cards
// land in `Inactive` until activated). Operations that require an Active card
// -- `getCardPinStatus`, `reportCardLost`, `reportCardStolen` -- therefore run
// against a virtual card. Virtual cards cannot be replaced (physical only).
export function buildCreateBusinessVirtualDebitCardRequest(
	accountId: string,
): CreateBusinessVirtualDebitCardRequest {
	return {
		data: {
			type: "businessVirtualDebitCard",
			attributes: {
				fullName: fullName(),
				dateOfBirth: "2001-08-15",
				address: usAddress(),
				phone: usPhone(),
				email: `peter+${TEST_RUN_ID}@oscorp.com`,
				ssn: "721074426",
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
			},
		},
	};
}

// UpdateCardDataAttributes only exposes card-holder contact fields (tags are
// not updatable on a card), so the update touches the card holder's phone.
export function buildUpdateCardRequest(): UpdateCardRequest {
	return {
		data: {
			type: "businessDebitCard",
			attributes: {
				phone: { countryCode: "1", number: "5555555556" },
			},
		},
	};
}

export function buildFreezeCardRequest(): FreezeCardRequest {
	return {
		data: {
			type: "freezeCard",
			attributes: { reason: "SDK integration test freeze" },
		},
	};
}

export function buildReplaceCardRequest(): ReplaceCardRequest {
	return {
		data: {
			type: "replaceCard",
			attributes: { shippingAddress: usAddress() },
		},
	};
}

// PATCH /accounts/{accountId}/transactions/{transactionId} accepts a generic
// tags-update envelope (`type: "transaction"`) regardless of the underlying
// transaction variant, so a single builder covers every transaction kind.
export function buildUpdateTransactionTagsRequest() {
	return {
		data: {
			type: "transaction" as const,
			attributes: {
				tags: { ...baseTags(), updated: "true" },
			},
		},
	};
}

// PATCH /transactions/{transactionId} is discriminated by data.type; the
// bookTransaction variant requires the owning account relationship alongside
// the updatable summary/tags attributes.
export function buildUpdateBookTransactionRequest(accountId: string) {
	return {
		data: {
			type: "bookTransaction" as const,
			attributes: {
				summary: "SDK integration test book transaction update",
				tags: { ...baseTags(), updated: "true" },
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
			},
		},
	};
}

// A business wallet customer is created directly (no application flow). The
// sandbox requires the full attribute set from the spec: bank partner name,
// business name, address, EIN, vertical and employee-count bucket.
export function buildCreateBusinessWalletCustomerRequest(): CreateBusinessWalletCustomerRequest {
	return {
		data: {
			type: "businessWalletCustomer",
			attributes: {
				// bankName must be one of the sandbox's partner-bank names
				// (Piermont, Blue Ridge, Pacific West, MVB, Choice Financial
				// Group, Thread, Lincoln Savings, Emprise, TransPecos, Vantage).
				bankName: "Thread",
				businessName: `Pied Piper Wallet ${TEST_RUN_ID}`,
				address: usAddress(),
				ein: "123456789",
				businessVertical: "TechnologyMediaOrTelecom",
				numberOfEmployees: BusinessNumberOfEmployeesType.Between50And100,
				tags: baseTags(),
			},
		},
	};
}

// updateCustomer is discriminated by data.type; the businessCustomer variant
// only touches tags here so the shared business customer is left otherwise
// intact for downstream suites.
export function buildUpdateBusinessCustomerRequest(): UpdateCustomerRequest {
	return {
		data: {
			type: "businessCustomer",
			attributes: {
				tags: { ...baseTags(), updated: "true" },
			},
		},
	};
}

export function buildArchiveCustomerRequest(): ArchiveCustomerRequest {
	return {
		data: {
			type: "customerArchive",
			attributes: { reason: "Inactive" },
		},
	};
}

export function buildUpdateBusinessCustomerOfficerRequest(): UpdateBusinessCustomerOfficerRequest {
	return {
		data: {
			type: "officer",
			attributes: { occupation: "ArchitectOrEngineer" },
		},
	};
}

function futureSendDate(): string {
	const date = new Date();
	date.setUTCDate(date.getUTCDate() + 30);
	return date.toISOString().slice(0, 10);
}

export function buildOriginateCheckPaymentRequest(
	accountId: string,
	customerId: string,
): OriginateCheckPaymentMailPhysicalCheckRequest {
	return {
		data: {
			type: "checkPayment",
			attributes: {
				amount: 1000,
				description: "SDK integration test check payment",
				idempotencyKey: `${TEST_RUN_ID}-check-payment-${Math.random()
					.toString(36)
					.slice(2, 10)}`,
				sendDate: futureSendDate(),
				counterparty: {
					name: "April Oneil",
					address: usAddress(),
				},
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
				customer: { data: { type: "customer", id: customerId } },
			},
		},
	};
}

export function buildReturnCheckPaymentRequest(): ReturnCheckPaymentRequest {
	return {
		data: {
			type: "checkPaymentReturn",
			attributes: { reason: "StopPayment" },
		},
	};
}

export function buildApproveCheckPaymentAdditionalVerificationRequest(): ApproveCheckPaymentAdditionalVerificationRequest {
	return {
		data: {
			type: "additionalVerification",
			attributes: {},
		},
	};
}

// A check deposit is created against an existing account; `amount` and
// `description` are the only required attributes. The account relationship uses
// the generic "account" resource type (matching the hold/fee fixtures).
export function buildCreateCheckDepositRequest(
	accountId: string,
): CreateCheckDepositRequest {
	return {
		data: {
			type: "checkDeposit",
			attributes: {
				amount: 20000,
				description: "SDK integration test check deposit",
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
			},
		},
	};
}

// updateCheckDeposit only exposes `tags` (and the optional
// clearingDaysOverride); `tags` is required on the update envelope.
export function buildUpdateCheckDepositRequest(): UpdateCheckDepositRequest {
	return {
		data: {
			type: "checkDeposit",
			attributes: {
				tags: { ...baseTags(), updated: "true" },
			},
		},
	};
}

// The send-link component requires a white-label theme and an authorized user
// alongside the account. Sandbox orgs without those resources reject the call,
// so the suite treats a validation error as a feature-unavailable skip.
export function buildCreateCheckDepositSendLinkRequest(
	accountId: string,
	whiteLabelThemeId: string,
	authorizedUserId: string,
): CreateCheckDepositSendLinkRequest {
	return {
		data: {
			type: "sendLinkForCheckDepositComponent",
			attributes: {
				qrCode: true,
				idempotencyKey: `${TEST_RUN_ID}-send-link-${Math.random()
					.toString(36)
					.slice(2, 10)}`,
			},
			relationships: {
				whiteLabelTheme: {
					data: { type: "whiteLabelTheme", id: whiteLabelThemeId },
				},
				account: { data: { type: "account", id: accountId } },
				authorizedUser: {
					data: { type: "authorizedUser", id: authorizedUserId },
				},
			},
		},
	};
}

// An ACH counterparty is an external bank account owned by one of our
// customers. The routing/account number pair has to resolve to a real bank, so
// the suite points the counterparty at one of the shared customer's own Unit
// deposit accounts (see `helpers/counterparties.ts`) rather than inventing an
// ABA number the sandbox would reject.
export function buildCreateCounterpartyRequest(
	customerId: string,
	routingNumber: string,
	accountNumber: string,
): CreateCounterpartyRequest {
	return {
		data: {
			type: "achCounterparty",
			attributes: {
				name: `Peter Parker ${TEST_RUN_ID}`,
				routingNumber,
				accountNumber,
				accountType: "Checking",
				type: "Business",
				tags: baseTags(),
				idempotencyKey: `${TEST_RUN_ID}-counterparty-${Math.random()
					.toString(36)
					.slice(2, 10)}`,
			},
			relationships: {
				customer: { data: { type: "customer", id: customerId } },
			},
		},
	};
}

// UpdateCounterpartyDataAttributes exposes plaidProcessorToken, verifyName,
// permissions and tags. Only `tags` is safe for a non-Plaid counterparty: a
// relink needs a Plaid token we don't have, and `permissions` beyond the
// default CreditOnly depends on the counterparty's bank.
export function buildUpdateCounterpartyRequest(): UpdateCounterpartyRequest {
	return {
		data: {
			type: "counterparty",
			attributes: {
				tags: { ...baseTags(), updated: "true" },
			},
		},
	};
}

export function buildAddAccountOwnersRequest(customerIds: string[]) {
	return {
		data: customerIds.map((id) => ({ type: "customer", id })),
	};
}

export function buildRemoveAccountOwnersRequest(customerIds: string[]) {
	return {
		data: customerIds.map((id) => ({ type: "customer", id })),
	};
}

/** 10-digit US-looking number that will not collide with the shared contact. */
function uniquePhoneNumber(): string {
	return `2${Date.now().toString().slice(-9)}`.slice(0, 10);
}

export function buildAuthorizedUser(
	overrides: Partial<AuthorizedUserType> = {},
): AuthorizedUserType {
	const unique = TEST_RUN_ID.replace(/[^a-zA-Z0-9]/g, "").slice(-8) || "user";
	return {
		fullName: { first: "Erlich", last: `Backman${unique}` },
		email: `erlich+${TEST_RUN_ID}@piedpiper.com`,
		phone: { countryCode: "1", number: uniquePhoneNumber() },
		...overrides,
	};
}

export function buildAddAuthorizedUsersRequest(
	users: AuthorizedUserType[] = [buildAuthorizedUser()],
): AddAuthorizedUsersRequest {
	return {
		data: {
			type: "addAuthorizedUsers",
			attributes: { authorizedUsers: users },
		},
	};
}

export function buildRemoveAuthorizedUsersRequest(
	emails: string[],
): RemoveAuthorizedUsersRequest {
	return {
		data: {
			type: "removeAuthorizedUsers",
			attributes: { authorizedUsersEmails: emails },
		},
	};
}

// CreatePolicy requires email/message outreach settings and a white-label
// theme that a plain sandbox org does not necessarily have. Tests pass
// placeholder relationship ids and treat a 4xx/5xx as feature-unavailable.
export function buildCreatePolicyRequest(
	emailOutreachSettingsId = "0",
	messageOutreachSettingsId = "0",
	whiteLabelThemeId = "0",
): CreatePolicyRequest {
	return {
		data: {
			type: "cardFraudOutreachPolicy",
			attributes: {
				contactPhone: usPhone(),
				contactUrl: "https://sdk-test.unit.co",
				activitiesLookBackPeriodHours: 72,
				caseExpirationPeriodHours: 72,
				numberOfCardActivities: 3,
				idempotencyKey: `${TEST_RUN_ID}-fraud-policy-${Math.random()
					.toString(36)
					.slice(2, 10)}`,
			},
			relationships: {
				emailOutreachSettings: {
					data: {
						type: "emailOutreachSettings",
						id: emailOutreachSettingsId,
					},
				},
				messageOutreachSettings: {
					data: {
						type: "messageOutreachSettings",
						id: messageOutreachSettingsId,
					},
				},
				whiteLabelTheme: {
					data: { type: "whiteLabelTheme", id: whiteLabelThemeId },
				},
			},
		},
	};
}

export function buildUpdatePolicyRequest(): UpdatePolicyRequest {
	return {
		data: {
			type: "cardFraudOutreachPolicy",
			attributes: {
				contactUrl: "https://sdk-test-updated.unit.co",
			},
		},
	};
}

export function buildCreateCardholderTokenVerificationRequest(): CreateCardholderTokenVerificationRequest {
	return {
		data: {
			type: "cardholderTokenVerification",
			attributes: { channel: "sms" },
		},
	};
}

/**
 * The spec marks `verificationToken` / `verificationCode` required even for the
 * plain `cards` scope. The code is a 6-digit OTP delivered to the card holder
 * out of band, so the suite can only send a placeholder.
 */
export function buildCreateCardholderTokenRequest(
	verificationToken: string,
	verificationCode = "000000",
): CreateCardholderTokenRequest {
	return {
		data: {
			type: "cardholderToken",
			attributes: {
				scope: "cards",
				verificationToken,
				verificationCode,
				expiresIn: 3600,
			},
		},
	};
}

/**
 * `signedNonce` is issued by the Visa in-app SDK. The suite cannot mint one,
 * so tests send the spec example and treat a 4xx as unavailable.
 */
export function buildGetMobileWalletPayloadRequest(
	signedNonce = "eyJle...",
): GetMobileWalletPayloadRequest {
	return {
		data: {
			attributes: { signedNonce },
		},
	};
}

export function buildMarkCardFraudCaseAsFraudRequest(
	fraudulentActivityIds: number[],
): MarkCardFraudCaseAsFraudRequest {
	return {
		data: {
			type: "markAsFraudRequest",
			attributes: { fraudulentActivityIds },
		},
	};
}

/**
 * Credit applications have no `tags` attribute, so the run marker rides along
 * in the free-form `additionalUnderwritingData` instead.
 */
const underwritingData = () => ({ testRun: TEST_RUN_ID });

const idempotency = (label: string) =>
	`${TEST_RUN_ID}-${label}-${Math.random().toString(36).slice(2, 10)}`;

/**
 * `lendingProgram` is required but this SDK surface has no list-lending-programs
 * operation, so callers borrow an id off an existing credit application.
 *
 * `idempotencyKey` is omitted deliberately: the spec declares it on the create
 * attributes, but the API answers 400 `"Field 'idempotencyKey' is not
 * expected"`. Spec defect owned by `unit-openapi`.
 */
export function buildCreateExistingCreditApplicationRequest(
	customerId: string,
	lendingProgramId: string,
): CreateCreditApplicationRequest {
	return {
		data: {
			type: "createExistingCustomerCreditApplication",
			attributes: {
				annualIncome: 100000,
				numberOfEmployees: BusinessNumberOfEmployeesType.UpTo10,
				yearsInBusiness: 4,
				additionalUnderwritingData: underwritingData(),
			},
			relationships: {
				customer: { data: { type: "customer", id: customerId } },
				lendingProgram: {
					data: { type: "lendingProgram", id: lendingProgramId },
				},
			},
		},
	};
}

export function buildUpdateCreditApplicationRequest(): UpdateCreditApplicationRequest {
	return {
		data: {
			type: "patchCreditApplication",
			attributes: {
				annualIncome: 120000,
				numberOfEmployees: BusinessNumberOfEmployeesType.UpTo10,
				yearsInBusiness: 5,
				additionalUnderwritingData: underwritingData(),
			},
		},
	};
}

export function buildCreateApprovedCreditLimitDecisionRequest(
	creditApplicationId: string,
): CreateCreditDecisionRequest {
	const now = new Date().toISOString();
	return {
		data: {
			type: "approvedCreditLimitDecision",
			attributes: {
				externalApplicationId: idempotency("ext-app"),
				submissionTimestamp: now,
				decisionTimestamp: now,
				creditLimit: 1000000,
				policyException: false,
				policyExceptionReason: "",
				additionalUnderwritingData: underwritingData(),
				idempotencyKey: idempotency("credit-decision"),
			},
			relationships: {
				creditApplication: {
					data: { type: "creditApplication", id: creditApplicationId },
				},
			},
		},
	};
}

/**
 * Body for the three DACA transitions. The spec declares the request body as
 * an untyped, optional `object`, but the API rejects a missing body with 400
 * `invalid_fields` and pins `data.type` to the constant
 * `updateDacaPoliciesRequest` with a required `account` relationship. Spec
 * defect owned by `unit-openapi`: model this body instead of `type: object`.
 */
export function buildUpdateDacaPoliciesRequest(accountId: string) {
	return {
		data: {
			type: "updateDacaPoliciesRequest" as const,
			relationships: {
				account: { data: { type: "depositAccount" as const, id: accountId } },
			},
		},
	};
}

/**
 * A `checkPaymentPositivePay` rule. Created `Active`, so it is the variant the
 * create / get / cancel suites use.
 */
export function buildCreateCheckPaymentPositivePayRequest(accountId: string) {
	return {
		data: {
			type: "checkPaymentPositivePay" as const,
			attributes: {
				checkNumber: `1${Math.floor(Math.random() * 9_000_000 + 1_000_000)}`,
				amount: 250_000,
				payeeName: "ACME Corp",
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "account" as const, id: accountId } },
			},
		},
	};
}

export function buildCreateReceivedAchDebitPositivePayRequest(
	accountId: string,
) {
	return {
		data: {
			type: "receivedAchDebitPositivePay" as const,
			attributes: {
				originatorName: "Payroll Company Inc",
				originatorEntityId: "1234567",
				amount: 500_000,
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "account" as const, id: accountId } },
			},
		},
	};
}

/**
 * A `drawdownPositivePay` rule. Unlike the other two variants this one is
 * created `AwaitingDocuments`, which is the only state
 * `uploadPositivePayDocument` accepts — the check-payment variant answers that
 * upload with 400 `Document upload activation not supported for this positive
 * pay type`.
 */
export function buildCreateWireDrawdownPositivePayRequest(accountId: string) {
	return {
		data: {
			type: "drawdownPositivePay" as const,
			attributes: {
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "account" as const, id: accountId } },
			},
		},
	};
}

export function buildConfigurePositivePayPolicyRequest(accountId: string) {
	return {
		data: {
			type: "positivePayPolicy" as const,
			attributes: {
				optInTypes: ["CheckPayment"],
			},
			relationships: {
				account: { data: { type: "account" as const, id: accountId } },
			},
		},
	};
}
