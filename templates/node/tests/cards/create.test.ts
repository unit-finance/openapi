import { buildCardsApi, describeIfToken } from "../helpers/api";
import { buildCreateBusinessDebitCardRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("CardsApi.createCard", () => {
	it("creates a business debit card for the shared account", async () => {
		const api = buildCardsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.createCard({
			createCardRequest: buildCreateBusinessDebitCardRequest(shared.accountId),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("businessDebitCard");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
