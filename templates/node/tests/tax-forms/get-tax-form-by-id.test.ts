import { buildTaxFormsApi, describeIfToken } from "../helpers/api";
import { getTaxFormId } from "../helpers/taxForms";

describeIfToken("TaxFormsApi.getTaxFormById", () => {
	it("fetches a tax form by id", async () => {
		const id = await getTaxFormId();
		if (!id) return;

		const api = buildTaxFormsApi();
		const { data, status } = await api.getTaxFormById({ id });

		expect(status).toBe(200);
		expect(data.data.id).toBe(id);
		expect(data.data.type).toBe("taxForm");
		expect(data.data.attributes).toBeDefined();
	});
});
