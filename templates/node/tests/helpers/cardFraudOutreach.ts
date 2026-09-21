import { isAxiosError } from "axios";
import type {
	CardFraudOutreachApi,
	CardFraudOutreachPolicy,
	CreatePolicy201Response,
} from "../..";
import { buildCardFraudOutreachApi } from "./api";
import { buildCreatePolicyRequest } from "./fixtures";

/**
 * CreatePolicy needs email/message outreach settings and a white-label theme
 * that a typical sandbox org does not provision. There is also no list-policies
 * operation, so get/update can only run after a successful create. Tests send
 * placeholder relationship ids `"0"` and treat a 4xx/5xx as
 * feature-unavailable — the send-link / holds pattern.
 *
 * Card fraud cases are inbound (the suite cannot mint one). List may be empty;
 * get/mark then abort. Mark also needs a Pending case with numeric activity
 * ids, which this org may never have.
 */
const SKIP_STATUSES = [400, 403, 404, 409, 410, 500];

function isPreconditionError(err: unknown): boolean {
	return (
		isAxiosError(err) &&
		err.response != null &&
		SKIP_STATUSES.includes(err.response.status)
	);
}

export async function createPolicyOrSkip(
	api: CardFraudOutreachApi = buildCardFraudOutreachApi(),
): Promise<{ data: CreatePolicy201Response; status: number } | null> {
	try {
		return await api.createPolicy({
			createPolicyRequest: buildCreatePolicyRequest(),
		});
	} catch (err) {
		if (isPreconditionError(err)) {
			console.warn(
				"Card fraud outreach policy create is unavailable on this sandbox org (missing outreach settings / white-label theme); skipping.",
			);
			return null;
		}
		throw err;
	}
}

let cachedPolicy: Promise<CardFraudOutreachPolicy | null> | null = null;

/** Lazily create one policy for get/update to reuse, or null when create aborts. */
export function getOrCreatePolicy(): Promise<CardFraudOutreachPolicy | null> {
	if (cachedPolicy) return cachedPolicy;
	cachedPolicy = (async () => {
		const created = await createPolicyOrSkip();
		return created?.data.data ?? null;
	})();
	return cachedPolicy;
}

export interface PendingFraudCase {
	id: string;
	type: string;
	activityIds: number[];
}

function activityIdsFrom(item: Record<string, unknown>): number[] {
	const attributes = item.attributes;
	if (!attributes || typeof attributes !== "object") return [];
	const activities = (attributes as { cardActivities?: unknown }).cardActivities;
	if (!Array.isArray(activities)) return [];
	const ids: number[] = [];
	for (const activity of activities) {
		if (!activity || typeof activity !== "object") continue;
		const raw = (activity as { id?: unknown }).id;
		const parsed =
			typeof raw === "number"
				? raw
				: typeof raw === "string"
					? Number.parseInt(raw, 10)
					: Number.NaN;
		if (!Number.isNaN(parsed)) ids.push(parsed);
	}
	return ids;
}

function asRecord(item: unknown): Record<string, unknown> | null {
	return item && typeof item === "object" ? (item as Record<string, unknown>) : null;
}

export async function listCasesOrSkip(
	api: CardFraudOutreachApi,
): Promise<Array<Record<string, unknown>> | null> {
	try {
		const { data, status } = await api.listCardFraudCases({ pageLimit: "20" });
		if (SKIP_STATUSES.includes(status)) {
			console.warn(
				`listCardFraudCases returned ${status}; treating as feature-unavailable.`,
			);
			return null;
		}
		return Array.isArray(data.data)
			? (data.data as unknown as Array<Record<string, unknown>>)
			: [];
	} catch (err) {
		if (isPreconditionError(err)) {
			console.warn(
				"listCardFraudCases is unavailable on this sandbox org; skipping.",
			);
			return null;
		}
		throw err;
	}
}

export function pendingCases(
	items: Array<Record<string, unknown>>,
): PendingFraudCase[] {
	const out: PendingFraudCase[] = [];
	for (const item of items) {
		const rec = asRecord(item);
		if (!rec || typeof rec.id !== "string") continue;
		const attributes = rec.attributes;
		const decision =
			attributes && typeof attributes === "object"
				? (attributes as { decision?: unknown }).decision
				: undefined;
		if (decision !== undefined && decision !== "Pending") continue;
		out.push({
			id: rec.id,
			type: typeof rec.type === "string" ? rec.type : "",
			activityIds: activityIdsFrom(rec),
		});
	}
	return out;
}
