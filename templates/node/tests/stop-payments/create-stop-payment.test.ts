import { buildStopPaymentsApi, describeIfToken } from "../helpers/api";
import {
	buildCreateAchStopPaymentRequest,
	buildCreateCheckStopPaymentRequest,
} from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";
import { CHECK_STOP_PAYMENT_TYPE } from "../helpers/stopPayments";

describeIfToken("StopPaymentsApi.createStopPayment", () => {
	it("creates a check stop payment", async () => {
		const api = buildStopPaymentsApi();
		const { accountId } = await getOrCreateSharedAccount();
		const checkNumber = `${Math.floor(Math.random() * 9_000_000 + 1_000_000)}`;

		const { data, status } = await api.createStopPayment({
			createStopPaymentRequest: buildCreateCheckStopPaymentRequest(
				accountId,
				checkNumber,
			) as never,
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe(CHECK_STOP_PAYMENT_TYPE);
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});

	it("creates an ACH stop payment", async () => {
		const api = buildStopPaymentsApi();
		const { accountId } = await getOrCreateSharedAccount();

		const { data, status } = await api.createStopPayment({
			createStopPaymentRequest: buildCreateAchStopPaymentRequest(
				accountId,
			) as never,
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("achStopPayment");
		expect(typeof data.data.id).toBe("string");
	});
});
