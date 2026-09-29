import { buildReceivablesManagementApi } from "./api";

/**
 * The id of an existing receivable, or `null` when the sandbox org has none.
 * Receivables are produced by Unit's lending flows, not through the API — this
 * surface exposes only list and get — so `getReceivableById` has nothing to
 * read when the list comes back empty.
 */
export async function getFirstReceivableIdOrSkip(): Promise<string | null> {
	const { data } = await buildReceivablesManagementApi().listReceivables({
		pageLimit: "1",
	});
	// `data` is a `oneOf` of a receivable array and a single balance resource;
	// only the array form carries ids.
	const items = Array.isArray(data.data) ? data.data : [];
	const first = items[0];
	if (!first) {
		console.warn(
			"No receivables exist on this sandbox org and the SDK has no create-receivable operation; skipping.",
		);
		return null;
	}
	return first.id;
}

/**
 * A one-day window for the accrued-interest read, as full ISO-8601 instants.
 *
 * `GET /accrued-interest/total` rejects a missing range with 400 and rejects
 * plain `YYYY-MM-DD` dates with 400 `Invalid value`, so `filter[since]` /
 * `filter[until]` must be datetimes. The window is kept to a single day
 * because wider ranges make the sandbox hang past any sensible client timeout.
 */
export function accruedInterestWindow(): { since: string; until: string } {
	const until = new Date();
	const since = new Date(until.getTime() - 24 * 60 * 60 * 1000);
	return { since: since.toISOString(), until: until.toISOString() };
}
