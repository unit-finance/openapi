import { buildTaxFormsApi, describeIfToken } from "../helpers/api";

describeIfToken("TaxFormsApi.listTaxForms", () => {
	it("returns a JSON:API list of tax forms", async () => {
		const api = buildTaxFormsApi();

		const { data, status } = await api.listTaxForms();

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		for (const taxForm of data.data) {
			expect(typeof taxForm.id).toBe("string");
			expect(taxForm.type).toBe("taxForm");
			expect(taxForm.attributes).toBeDefined();
		}
	});
});
