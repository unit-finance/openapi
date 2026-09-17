import {
	buildApplicationDocumentsApi,
	describeIfToken,
} from "../helpers/api";
import { getOrCreateSharedBusinessApp } from "../helpers/sharedApp";

describeIfToken("ApplicationDocumentsApi.listApplicationDocuments", () => {
	it("returns a JSON:API list of application documents", async () => {
		const api = buildApplicationDocumentsApi();
		const shared = await getOrCreateSharedBusinessApp();

		const { data, status } = await api.listApplicationDocuments({
			applicationId: shared.id,
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		for (const doc of data.data) {
			expect(typeof doc.type).toBe("string");
			expect(typeof doc.id).toBe("string");
			expect(doc.attributes).toBeDefined();
		}
	});
});
