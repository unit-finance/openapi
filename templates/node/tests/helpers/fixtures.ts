import type {
	CreateBusinessApplicationRequest,
	CreateIndividualApplicationRequest,
	CreateSoleProprietorApplicationRequest,
	UpdateBusinessApplicationRequest,
	UpdateBusinessBeneficialOwnerRequest,
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

export function buildCheckRegisteredAgentAddressRequest() {
	return {
		data: {
			type: "checkRegisteredAgentAddress",
			attributes: { address: usAddress() },
		},
	};
}

// --- Accounts / Fees / Payments fixtures ---

export function buildCreateDepositAccountRequest(customerId: string) {
	return {
		data: {
			type: "depositAccount" as const,
			attributes: {
				depositProduct: "checking",
				tags: baseTags(),
			},
			relationships: {
				customer: {
					data: { type: "customer", id: customerId },
				},
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

export function buildAddAccountOwnersRequest(customerId: string) {
	return {
		data: [{ type: "customer", id: customerId }],
	};
}

export function buildCreateAccountHoldRequest(accountId: string) {
	return {
		data: {
			type: "accountHold" as const,
			attributes: {
				amount: 100,
				description: "SDK integration test hold",
			},
			relationships: {
				account: { data: { type: "account", id: accountId } },
			},
		},
	};
}

export function buildCreateFeeRequest(accountId: string) {
	return {
		data: {
			type: "fee" as const,
			attributes: {
				amount: 50,
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
			attributes: { description: "SDK integration test fee reversal" },
			relationships: {
				account: { data: { type: "account", id: accountId } },
				transaction: { data: { type: "transaction", id: transactionId } },
			},
		},
	};
}

export function buildReleaseAccountHoldRequest(amount = 100) {
	return {
		data: {
			type: "accountHold" as const,
			attributes: { amount },
		},
	};
}

const sandboxCounterparty = () => ({
	routingNumber: "812345678",
	accountNumber: "1000000001",
	accountType: "Checking" as const,
	name: "SDK Test Counterparty",
});

export function buildAchCreditPaymentRequest(accountId: string) {
	return {
		data: {
			type: "achPayment" as const,
			attributes: {
				amount: 10_000,
				direction: "Credit" as const,
				description: "SDK test funding",
				counterparty: sandboxCounterparty(),
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "depositAccount", id: accountId } },
			},
		},
	};
}

export function buildAchDebitPaymentRequest(accountId: string) {
	return {
		data: {
			type: "achPayment" as const,
			attributes: {
				amount: 100,
				direction: "Debit" as const,
				description: "SDK test debit",
				counterparty: sandboxCounterparty(),
				tags: baseTags(),
			},
			relationships: {
				account: { data: { type: "depositAccount", id: accountId } },
			},
		},
	};
}

export function buildBookPaymentRequest(
	accountId: string,
	counterpartyAccountId: string,
) {
	return {
		data: {
			type: "bookPayment" as const,
			attributes: {
				amount: 100,
				description: "SDK book payment",
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

export function buildUpdateBookPaymentRequest() {
	return {
		data: {
			type: "bookPayment" as const,
			attributes: { tags: { ...baseTags(), updated: "true" } },
		},
	};
}

export function buildBulkPaymentRequest(
	accountId: string,
	counterpartyAccountId: string,
) {
	return {
		data: [
			buildBookPaymentRequest(accountId, counterpartyAccountId).data,
		],
	};
}

export function buildExpectedAchCompletionDateRequest(accountId: string) {
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

export function buildUpdateReceivedPaymentRequest() {
	return {
		data: {
			type: "achReceivedPayment" as const,
			attributes: { tags: { ...baseTags(), updated: "true" } },
		},
	};
}

export function buildRecurringBookPaymentRequest(
	accountId: string,
	counterpartyAccountId: string,
) {
	const start = new Date();
	start.setMonth(start.getMonth() + 1);
	const end = new Date(start);
	end.setMonth(end.getMonth() + 2);
	return {
		data: {
			type: "recurringCreditBookPayment" as const,
			attributes: {
				amount: 100,
				description: "SDK recurring book",
				schedule: {
					interval: "Monthly",
					dayOfMonth: 15,
					startTime: start.toISOString().slice(0, 10),
					endTime: end.toISOString().slice(0, 10),
				},
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

export function buildCreateBatchReleasesRequest(accountId: string) {
	return {
		data: {
			type: "batchRelease" as const,
			attributes: {
				amount: 100,
				description: "SDK batch release",
				senderName: "SDK Sender",
				senderAccountNumber: "1234567890",
				senderAddress: {
					street: "20 Ingram St",
					city: "Forest Hills",
					state: "NY",
					postalCode: "11375",
					country: "US",
				},
				tags: baseTags(),
			},
			relationships: {
				receiver: { data: { type: "depositAccount", id: accountId } },
			},
		},
	};
}

export function buildCashDepositBarcodeRequest(
	customerId: string,
	accountId: string,
	storeId: string,
) {
	return {
		data: {
			type: "cashDepositBarcode" as const,
			attributes: { storeId },
			relationships: {
				customer: { data: { type: "customer", id: customerId } },
				account: { data: { type: "account", id: accountId } },
			},
		},
	};
}
