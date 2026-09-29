import {
	buildReceivablesManagementApi,
	describeIfToken,
} from "../helpers/api";
import { getFirstReceivableIdOrSkip } from "../helpers/receivables";

describeIfToken("ReceivablesManagementApi.getReceivableById", () => {
	it("reads a single receivable resource", async () => {
		const api = buildReceivablesManagementApi();
		const id = await getFirstReceivableIdOrSkip();
		if (!id) return;

		const { data, status } = await api.getReceivableById({ id });

		expect(status).toBe(200);
		expect(data.data.id).toBe(id);
		expect(data.data.type).toBe("bankReceivable");
		expect(data.data.attributes).toBeDefined();
		expect(typeof data.data.attributes.createdAt).toBe("string");
	});
});
