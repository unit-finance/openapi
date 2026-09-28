import {
	buildReceivablesManagementApi,
	describeIfToken,
} from "../helpers/api";

describeIfToken("ReceivablesManagementApi.listReceivables", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildReceivablesManagementApi();

		const { data, status } = await api.listReceivables({ pageLimit: "20" });

		expect(status).toBe(200);
		// `data` is a `oneOf` of a receivable array and a single balance
		// resource; the unfiltered list returns the array form.
		expect(Array.isArray(data.data)).toBe(true);
		const items = Array.isArray(data.data) ? data.data : [];
		expect(items.length).toBeLessThanOrEqual(20);
		for (const receivable of items) {
			expect(typeof receivable.id).toBe("string");
			expect(receivable.type).toBe("bankReceivable");
			expect(receivable.attributes).toBeDefined();
		}
	});
});
