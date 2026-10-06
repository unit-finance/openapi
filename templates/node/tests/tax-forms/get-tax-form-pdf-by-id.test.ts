import { buildTaxFormsApi, describeIfToken } from "../helpers/api";
import { getTaxFormId } from "../helpers/taxForms";

describeIfToken("TaxFormsApi.getTaxFormPdfById", () => {
	it("downloads a tax form as PDF", async () => {
		const id = await getTaxFormId();
		if (!id) return;

		const api = buildTaxFormsApi();
		const { data, status } = await api.getTaxFormPdfById({ id });

		expect(status).toBe(200);
		expect(data).toBeDefined();
	});
});
