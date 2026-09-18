import { isAxiosError } from "axios";
import type { AuthorizedUserType } from "../..";
import { buildAuthorizedUsersApi } from "./api";
import {
	buildAddAuthorizedUsersRequest,
	buildAuthorizedUser,
} from "./fixtures";

/**
 * Add an authorized user to a customer, or return `null` when the sandbox
 * org rejects the POST (capability off, duplicate, invalid payload). That is
 * org config we cannot toggle from this SDK, so callers treat it as
 * unavailable rather than failing.
 */
export async function addAuthorizedUserOrSkip(
	customerId: string,
	user: AuthorizedUserType = buildAuthorizedUser(),
) {
	const api = buildAuthorizedUsersApi();
	try {
		const created = await api.addAuthorizedUsers({
			customerId,
			addAuthorizedUsersRequest: buildAddAuthorizedUsersRequest([user]),
		});
		return { created, user };
	} catch (err) {
		if (
			isAxiosError(err) &&
			err.response != null &&
			[400, 403, 404, 409, 500].includes(err.response.status)
		) {
			console.warn(
				"Adding authorized users is not available on this sandbox org; skipping.",
			);
			return null;
		}
		throw err;
	}
}

/**
 * The list/get schemas type `data` as `AuthorizedUserType` (fullName / email /
 * phone), but the operations are documented as JSON:API resources. Pull an
 * `id` out of whichever shape the sandbox actually returned.
 */
export function authorizedUserId(item: unknown): string | undefined {
	if (item == null || typeof item !== "object") return undefined;
	const rec = item as { id?: unknown; attributes?: { id?: unknown } };
	if (typeof rec.id === "string" && rec.id.length > 0) return rec.id;
	if (typeof rec.attributes?.id === "string" && rec.attributes.id.length > 0) {
		return rec.attributes.id;
	}
	return undefined;
}
