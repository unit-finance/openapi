import type { DepositAccount } from "../..";
import { buildAccountsApi, buildApplicationsApi, describeIfToken } from "../helpers/api";
import {
	buildBusinessApplicationRequest,
	buildCreateDepositAccountRequest,
} from "../helpers/fixtures";
import type { BusinessApplication } from "../..";

describeIfToken("AccountsApi.createAccount", () => {
	it("creates a deposit account for an approved business customer", async () => {
		const appsApi = buildApplicationsApi();
		const accountsApi = buildAccountsApi();

		const created = await appsApi.createApplication({
			createApplicationRequest: buildBusinessApplicationRequest(),
		});
		expect(created.status).toBe(201);

		const app = await appsApi.getById({ id: created.data.data.id });
		const appData = app.data.data as BusinessApplication;
		const customerRel = appData.relationships?.customer?.data;
		const customerId = Array.isArray(customerRel)
			? customerRel[0]?.id
			: customerRel?.id;
		expect(customerId).toBeDefined();

		const { data, status } = await accountsApi.createAccount({
			createAccountRequest: buildCreateDepositAccountRequest(customerId!),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("depositAccount");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		const account = data.data as DepositAccount;
		expect(account.attributes.depositProduct).toBeDefined();
		expect(account.attributes.status).toBeDefined();
	});
});
