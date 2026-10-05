import { buildTaxFormsApi } from "./api";

/**
 * A tax form id, or `null` when the org has none.
 *
 * Tax forms are issued by Unit once a year per customer; there is no operation
 * to create one, so a sandbox org that has not crossed a tax year has nothing
 * for the single-form read and the PDF download to address.
 */
export async function getTaxFormId(): Promise<string | null> {
	const { data } = await buildTaxFormsApi().listTaxForms();
	const first = Array.isArray(data.data) ? data.data[0] : undefined;
	if (first && typeof first.id === "string") return first.id;
	console.warn(
		"This sandbox org has no tax forms (they are issued annually and cannot be created from the API); skipping.",
	);
	return null;
}
