import type {
	CheckRegisteredAgentAddressRequest,
	CreateBusinessApplicationRequest,
	CreateIndividualApplicationRequest,
	CreateSoleProprietorApplicationRequest,
	UpdateBusinessApplicationRequest,
	UpdateBusinessBeneficialOwnerRequest,
} from "../..";
import {
	BusinessAnnualRevenue,
	BusinessNumberOfEmployees,
	SoleProprietorAnnualRevenue,
	SoleProprietorNumberOfEmployees,
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
				annualRevenue: BusinessAnnualRevenue.Between500kAnd1m,
				numberOfEmployees: BusinessNumberOfEmployees.Between50And100,
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
				annualRevenue: SoleProprietorAnnualRevenue.Between100kAnd200k,
				numberOfEmployees: SoleProprietorNumberOfEmployees.Between2And5,
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

export function buildCheckRegisteredAgentAddressRequest(): CheckRegisteredAgentAddressRequest {
	return {
		data: {
			type: "checkRegisteredAgentAddress",
			attributes: { address: usAddress() },
		},
	};
}
