import { buildDisputesApi } from "./api";

/**
 * The id of an existing dispute, or `null` when the sandbox org has none.
 * Disputes are opened by Unit operations, not through the API — this surface
 * exposes only list and get — so `getDisputeById` has nothing to read when the
 * list comes back empty.
 */
export async function getFirstDisputeIdOrSkip(): Promise<string | null> {
	const { data } = await buildDisputesApi().listDisputes({ pageLimit: "1" });
	const first = data.data?.[0];
	if (!first) {
		console.warn(
			"No disputes exist on this sandbox org and the SDK has no create-dispute operation; skipping.",
		);
		return null;
	}
	return first.id;
}
