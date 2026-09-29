import { buildLendingProgramsApi } from "./api";

/**
 * The id of an existing lending program, or `null` when the sandbox org has
 * none. Lending programs are provisioned by Unit, not through the API — this
 * surface exposes only list and the two reads — so the by-id operations have
 * nothing to read when the list comes back empty.
 */
export async function getFirstLendingProgramIdOrSkip(): Promise<string | null> {
	const { data } = await buildLendingProgramsApi().listLendingPrograms({
		pageLimit: "1",
	});
	const first = data.data?.[0];
	if (!first) {
		console.warn(
			"No lending programs exist on this sandbox org and the SDK has no create-lending-program operation; skipping.",
		);
		return null;
	}
	return first.id;
}
