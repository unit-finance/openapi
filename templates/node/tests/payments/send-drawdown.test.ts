import { buildPaymentsApi, describeIfToken, TEST_RUN_ID } from "../helpers/api";

describeIfToken("PaymentsApi.sendDrawdownPayment", () => {
	it("sends a drawdown payment when a wire drawdown exists", async () => {
		const api = buildPaymentsApi();
		const listed = await api.listWireDrawdowns({ pageLimit: "1" });
		expect(listed.status).toBe(200);

		if (!listed.data.data.length) {
			test.skip("No wire drawdowns available in sandbox to send.");
			return;
		}

		const wireDrawdownId = listed.data.data[0].id;
		const { data, status } = await api.sendDrawdownPayment({
			id: wireDrawdownId,
			sendDrawdownPaymentRequest: {
				data: {
					type: "sendWireDrawdown",
					attributes: {
						idempotencyKey: `send-drawdown-${TEST_RUN_ID}`,
					},
				},
			},
		});

		expect([200, 201]).toContain(status);
		expect(data.data).toBeDefined();
	});
});
