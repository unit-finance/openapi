import type {
	CreateBusinessApplicationRequest,
	CreateBusinessDebitCardRequest,
	CreateBusinessVirtualDebitCardRequest,
	CreateIndividualApplicationRequest,
	CreateSoleProprietorApplicationRequest,
	FreezeCardRequest,
	ReplaceCardRequest,
	UpdateBusinessApplicationRequest,
	UpdateBusinessBeneficialOwnerRequest,
	UpdateCardRequest,
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
