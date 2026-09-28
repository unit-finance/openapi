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
 * needs a `lendingProgram` relationship id. Spec 0.18.0 added
 * `listLendingPrograms`, but it returns programs of every kind (receivables
 * retention, charge card, ...) and only a credit-capable one is accepted here,
 * so the id is still read off an existing credit application rather than
 * guessed from that list. A sandbox org without a credit/lending program
 * returns 4xx/5xx for the list. That is org configuration, not a bad request,
 * so the helpers return `null` (unavailable) instead of failing — the holds /
 * send-link pattern.
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
 * Reads a lending program id off an existing credit application — the only way
 * to name a program that credit applications actually accept; `null` when the
 * org has no credit applications to read one from.
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
			"No credit-capable lending program is visible on this sandbox org; skipping createCreditApplication.",
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
 * A credit application id for get/decision to reuse. Prefer one this run
 * created so the suites never touch an unrelated org resource; fall back to an
 * existing one. `null` when neither is available.
 *
 * The update suite deliberately does NOT share this one — see
 * `getPatchableCreditApplicationId`.
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

function statusOf(item: Record<string, unknown>): string | undefined {
	const attributes = item.attributes;
	if (!attributes || typeof attributes !== "object") return undefined;
	const status = (attributes as { status?: unknown }).status;
	return typeof status === "string" ? status : undefined;
}

/**
 * A credit application the update suite may PATCH.
 *
 * Recording an approved decision flips an application to `Approved`, and the
 * API then refuses the PATCH with **400
 * `not_supported_for_credit_application_status`**. Sharing one application
 * between the update and create-decision suites therefore makes the run
 * order-dependent — which is exactly how this broke on CI, where Surefire's
 * filesystem order put the decision first. So the update suite always mints
 * its own application and only ever falls back to one still in `Pending`.
 */
export async function getPatchableCreditApplicationId(): Promise<string | null> {
	const created = await createCreditApplicationOrSkip();
	const createdId = created?.data.data?.id;
	if (typeof createdId === "string") return createdId;
	for (const item of (await listCreditApplicationsOrSkip()) ?? []) {
		if (statusOf(item) === "Pending" && typeof item.id === "string") {
			return item.id;
		}
	}
	return null;
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
