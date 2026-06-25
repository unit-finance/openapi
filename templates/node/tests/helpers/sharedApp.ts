import type { BusinessApplication } from "../..";
import { buildApi } from "./api";
import { buildBusinessApplicationRequest } from "./fixtures";

interface SharedApp {
	id: string;
	type: "businessApplication" | "individualApplication";
	beneficialOwnerId?: string;
}

let cached: Promise<SharedApp> | null = null;

/**
 * Lazily creates one Business application that downstream tests
 * (`getById`, `update`, `update-beneficial-owner`, `cancel`) reuse.
 *
 * Jest is invoked with `--runInBand`, so files run sequentially in a
 * single worker and this module-level cache is shared across files.
 */
export function getOrCreateSharedBusinessApp(): Promise<SharedApp> {
	if (cached) return cached;
	cached = (async () => {
		const api = buildApi();
		const { data, status } = await api.createApplication({
			createApplicationRequest: buildBusinessApplicationRequest(),
		});
		// Throw rather than `expect(...)` here: this runs inside a module-level
		// async IIFE, not a test body, so a jest assertion would be attributed
		// to whichever test first awaits this promise and produce a misleading
		// report. A thrown error rejects the shared promise cleanly instead.
		if (status !== 201) {
			throw new Error(
				`Failed to create shared business application: expected status 201, got ${status}.`,
			);
		}
		const created = data.data;
		// Beneficial owners are not compound-included on the create response
		// (`included[]` is empty); only their resource identifiers are exposed,
		// via the business application's `beneficialOwners` relationship. Read
		// the id from there.
		const beneficialOwnerId = (created as BusinessApplication).relationships
			?.beneficialOwners?.data?.[0]?.id;
		return {
			id: created.id,
			type: created.type as SharedApp["type"],
			beneficialOwnerId,
		};
	})();
	return cached;
}
