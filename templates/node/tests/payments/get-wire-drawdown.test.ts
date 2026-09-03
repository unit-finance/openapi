import { buildPaymentsApi, describeIfToken } from "../helpers/api";

describeIfToken("PaymentsApi.getWireDrawdown", () => {
	it("returns a wire drawdown when one exists", async () => {
		const api = buildPaymentsApi();
		const listed = await api.listWireDrawdowns({ pageLimit: "1" });
		expect(listed.status).toBe(200);
		if (!listed.data.data.length) return;
		const drawdownId = listed.data.data[0].id;

		const { data, status } = await api.getWireDrawdown({ id: drawdownId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(drawdownId);
		expect(data.data.type).toBe("wireDrawdown");
	});
});
