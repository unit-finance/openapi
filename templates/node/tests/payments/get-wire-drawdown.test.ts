import { buildPaymentsApi, describeIfToken } from "../helpers/api";

describeIfToken("PaymentsApi.getWireDrawdown", () => {
	it("returns a wire drawdown when one exists", async () => {
		const api = buildPaymentsApi();
		const listed = await api.listWireDrawdowns({ pageLimit: "1" });
		expect(listed.status).toBe(200);

		if (!listed.data.data.length) {
			expect(true).toBe(true);
			return;
		}

		const wireDrawdownId = listed.data.data[0].id;
		const { data, status } = await api.getWireDrawdown({ id: wireDrawdownId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(wireDrawdownId);
		expect(data.data.attributes).toBeDefined();
	});
});
