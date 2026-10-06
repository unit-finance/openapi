import { buildRewardsApi } from "./api";
import { errorBody, isCapabilityError } from "./capabilities";
import { buildCreateRewardRequest } from "./fixtures";
import { getOrCreateSharedAccount } from "./sharedAccount";

/**
 * Create a reward, or `null` when the org has no rewards program. Rewards are
 * funded from an org-level reward account that is provisioned per bank
 * agreement and cannot be created from the API, so an org without one answers
 * the create with 4xx/5xx — feature-unavailable, not a bad request.
 */
export async function createRewardOrSkip(): Promise<{
	id: string;
	type: string;
} | null> {
	const { accountId } = await getOrCreateSharedAccount();
	try {
		const { data, status } = await buildRewardsApi().createReward({
			createRewardRequest: buildCreateRewardRequest(accountId),
		});
		if (status !== 201) {
			throw new Error(
				`Failed to create reward: expected status 201, got ${status}.`,
			);
		}
		return { id: data.data.id, type: data.data.type };
	} catch (err) {
		if (isCapabilityError(err)) {
			console.warn(
				`Rewards are not provisioned on this sandbox org; skipping. ${errorBody(err)}`,
			);
			return null;
		}
		throw err;
	}
}

/**
 * A reward id for the read suite. Prefers one this run created; falls back to
 * an existing reward so the read is still covered on an org that cannot
 * create. `null` when neither is available.
 */
export async function getRewardId(): Promise<string | null> {
	const created = await createRewardOrSkip();
	if (created) return created.id;

	const { data } = await buildRewardsApi().listRewards({ pageLimit: "1" });
	const first = Array.isArray(data.data) ? data.data[0] : undefined;
	return first && typeof first.id === "string" ? first.id : null;
}
