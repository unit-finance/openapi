import { buildPaymentsApi, describeIfToken } from "../helpers/api";

describeIfToken("PaymentsApi.sendDrawdownPayment", () => {
	it("sends a drawdown payment when a wire drawdown exists", async () => {
		const api = buildPaymentsApi();
		const listed = await api.listWireDrawdowns({ pageLimit: "1" });
		expect(listed.status).toBe(200);
		if (!listed.data.data.length) return;
		const drawdownId = listed.data.data[0].id;

		const { data, status } = await api.sendDrawdownPayment({
			id: drawdownId,
			sendDrawdownPaymentRequest: {
				data: {
					type: "sendWireDrawdown",
					attributes: { idempotencyKey: `sdk-node-drawdown-${Date.now()}` },
				},
			},
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("wirePayment");
		expect(typeof data.data.id).toBe("string");
	});
});
