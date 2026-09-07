import { buildCardsApi } from "./api";
import {
	buildCreateBusinessDebitCardRequest,
	buildCreateBusinessVirtualDebitCardRequest,
} from "./fixtures";
import { getOrCreateSharedAccount } from "./sharedAccount";

export interface SharedCard {
	cardId: string;
	type: string;
}

let cached: Promise<SharedCard> | null = null;

async function createCard(virtual: boolean): Promise<SharedCard> {
	const shared = await getOrCreateSharedAccount();
	const api = buildCardsApi();
	const request = virtual
		? buildCreateBusinessVirtualDebitCardRequest(shared.accountId)
		: buildCreateBusinessDebitCardRequest(shared.accountId);
	const { data, status } = await api.createCard({ createCardRequest: request });
	if (status !== 201) {
		throw new Error(
			`Failed to create card: expected status 201, got ${status}.`,
		);
	}
	return { cardId: data.data.id, type: data.data.type };
}

/**
 * Lazily provisions one Active virtual card that read-only Cards suites
 * (`getCard`, `listCards`, `getCardLimits`, `getCardPinStatus`) reuse. Virtual
 * cards are Active on creation, which `getCardPinStatus` requires.
 */
export function getOrCreateSharedCard(): Promise<SharedCard> {
	if (cached) return cached;
	cached = createCard(true);
	return cached;
}

/**
 * Creates an isolated physical debit card for tests that mutate card state and
 * work on `Inactive` cards (`updateCard`, `freezeCard`, `unfreezeCard`,
 * `closeCard`, `replaceCard` -- replacement is physical-only).
 */
export function createDedicatedCard(): Promise<SharedCard> {
	return createCard(false);
}

/**
 * Creates an isolated Active virtual card for mutations that require an Active
 * card (`reportCardLost`, `reportCardStolen`).
 */
export function createDedicatedVirtualCard(): Promise<SharedCard> {
	return createCard(true);
}
