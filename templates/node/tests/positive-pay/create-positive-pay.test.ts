import type { CreatePositivePayRequest } from "../..";
import { buildPositivePayApi, describeIfToken } from "../helpers/api";
import {
	buildCreateCheckPaymentPositivePayRequest,
	buildCreateReceivedAchDebitPositivePayRequest,
	buildCreateWireDrawdownPositivePayRequest,
} from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PositivePayApi.createPositivePay", () => {
	it("creates a check-payment rule", async () => {
		const api = buildPositivePayApi();
		const { accountId } = await getOrCreateSharedAccount();

		const { data, status } = await api.createPositivePay({
			createPositivePayRequest: buildCreateCheckPaymentPositivePayRequest(
				accountId,
			) as CreatePositivePayRequest,
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("checkPaymentPositivePay");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});

	it("creates a received-ACH-debit rule", async () => {
		const api = buildPositivePayApi();
		const { accountId } = await getOrCreateSharedAccount();

		const { data, status } = await api.createPositivePay({
			createPositivePayRequest: buildCreateReceivedAchDebitPositivePayRequest(
				accountId,
			) as CreatePositivePayRequest,
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("receivedAchDebitPositivePay");
		expect(typeof data.data.id).toBe("string");
	});

	it("creates a wire-drawdown rule", async () => {
		const api = buildPositivePayApi();
		const { accountId } = await getOrCreateSharedAccount();

		const { data, status } = await api.createPositivePay({
			createPositivePayRequest: buildCreateWireDrawdownPositivePayRequest(
				accountId,
			) as CreatePositivePayRequest,
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("drawdownPositivePay");
		expect(typeof data.data.id).toBe("string");
	});
});
