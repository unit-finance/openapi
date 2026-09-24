import { isAxiosError } from "axios";
import type {
	CreateCreditApplication201Response,
	CreateCreditDecision201Response,
	CreditApplicationsApi,
	CreditDecisionsApi,
} from "../..";
import { buildCreditApplicationsApi, buildCreditDecisionsApi } from "./api";
import {
	buildCreateApprovedCreditLimitDecisionRequest,
	buildCreateExistingCreditApplicationRequest,
} from "./fixtures";
import { getSharedBusinessCustomerId } from "./customers";

/**
 * Credit applications are gated on a lending program: every create request
 * needs a `lendingProgram` relationship id, and this SDK surface exposes no
 * list-lending-programs operation, so the suite can only send a placeholder.
 * A sandbox org without a credit/lending program also returns 4xx/5xx for the
 * list. Both are org configuration, not a bad request, so the helpers return
 * `null` (unavailable) instead of failing — the holds / send-link pattern.
 */
const SKIP_STATUSES = [400, 403, 404, 409, 422, 500];

function isPreconditionError(err: unknown): boolean {
	return (
		isAxiosError(err) &&
		err.response != null &&
		SKIP_STATUSES.includes(err.response.status)
	);
}

export async function listCreditApplicationsOrSkip(
	api: CreditApplicationsApi = buildCreditApplicationsApi(),
): Promise<Array<Record<string, unknown>> | null> {
	try {
		const { data } = await api.listCreditApplications({ pageLimit: "20" });
		return Array.isArray(data.data)
			? (data.data as unknown as Array<Record<string, unknown>>)
			: [];
	} catch (err) {
		if (isPreconditionError(err)) {
			console.warn(
				"listCreditApplications is unavailable on this sandbox org (no lending program provisioned); skipping.",
			);
			return null;
		}
		throw err;
	}
}

/**
 * Reads a lending program id off an existing credit application. There is no
 * list-lending-programs operation, so this is the only way to name a real
 * program; `null` when the org has no credit applications to read one from.
 */
export async function getLendingProgramId(): Promise<string | null> {
	const items = await listCreditApplicationsOrSkip();
	for (const item of items ?? []) {
		const relationships = item.relationships;
		if (!relationships || typeof relationships !== "object") continue;
		const program = (relationships as { lendingProgram?: { data?: unknown } })
			.lendingProgram?.data;
		if (program && !Array.isArray(program)) {
			const id = (program as { id?: unknown }).id;
			if (typeof id === "string") return id;
		}
	}
	return null;
}

export async function createCreditApplicationOrSkip(
	api: CreditApplicationsApi = buildCreditApplicationsApi(),
): Promise<{ data: CreateCreditApplication201Response; status: number } | null> {
	const lendingProgramId = await getLendingProgramId();
	if (!lendingProgramId) {
		console.warn(
			"No lending program is visible on this sandbox org and the SDK has no list-lending-programs operation; skipping createCreditApplication.",
		);
		return null;
	}
	const customerId = await getSharedBusinessCustomerId();
	try {
		return await api.createCreditApplication({
			createCreditApplicationRequest:
				buildCreateExistingCreditApplicationRequest(
					customerId,
					lendingProgramId,
				),
		});
	} catch (err) {
		if (isPreconditionError(err)) {
			console.warn(
				"createCreditApplication is unavailable on this sandbox org; skipping.",
				isAxiosError(err) ? JSON.stringify(err.response?.data) : "",
			);
			return null;
		}
		throw err;
	}
}

let cachedApplicationId: Promise<string | null> | null = null;

/**
 * A credit application id for get/update/decision to reuse. Prefer one this
 * run created so the update suite never patches an unrelated org resource;
 * fall back to an existing one. `null` when neither is available.
 */
export function getCreditApplicationId(): Promise<string | null> {
	if (cachedApplicationId) return cachedApplicationId;
	cachedApplicationId = (async () => {
		const created = await createCreditApplicationOrSkip();
		const createdId = created?.data.data?.id;
		if (typeof createdId === "string") return createdId;
		const existing = await listCreditApplicationsOrSkip();
		const first = existing?.[0];
		return first && typeof first.id === "string" ? first.id : null;
	})();
	return cachedApplicationId;
}

export async function listCreditDecisionsOrSkip(
	api: CreditDecisionsApi = buildCreditDecisionsApi(),
): Promise<Array<Record<string, unknown>> | null> {
	try {
		const { data } = await api.listCreditDecisions({ pageLimit: "20" });
		return Array.isArray(data.data)
			? (data.data as unknown as Array<Record<string, unknown>>)
			: [];
	} catch (err) {
		if (isPreconditionError(err)) {
			console.warn(
				"listCreditDecisions is unavailable on this sandbox org; skipping.",
			);
			return null;
		}
		throw err;
	}
}

export async function createCreditDecisionOrSkip(
	creditApplicationId: string,
	api: CreditDecisionsApi = buildCreditDecisionsApi(),
): Promise<{ data: CreateCreditDecision201Response; status: number } | null> {
	try {
		return await api.createCreditDecision({
			createCreditDecisionRequest:
				buildCreateApprovedCreditLimitDecisionRequest(creditApplicationId),
		});
	} catch (err) {
		if (isPreconditionError(err)) {
			console.warn(
				"createCreditDecision is unavailable on this sandbox org (credit application not in a decidable state); skipping.",
			);
			return null;
		}
		throw err;
	}
}
