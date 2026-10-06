import { isAxiosError } from "axios";

/**
 * Statuses the sandbox answers with when an operation is real but the org
 * behind the token was never provisioned for it — no credit terms, no rewards
 * program, no statement history. These are org configuration, not bad
 * requests, so the helpers that hit them return `null` (unavailable) and the
 * calling suite aborts instead of failing. Same pattern as `holds.ts`.
 */
const CAPABILITY_STATUSES = [400, 403, 404, 405, 409, 422, 500];

export function isCapabilityError(err: unknown): boolean {
	return (
		isAxiosError(err) &&
		err.response != null &&
		CAPABILITY_STATUSES.includes(err.response.status)
	);
}

/** The sandbox's error body, for the `console.warn` that explains a skip. */
export function errorBody(err: unknown): string {
	return isAxiosError(err) ? JSON.stringify(err.response?.data ?? "") : "";
}
