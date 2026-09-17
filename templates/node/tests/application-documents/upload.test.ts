import {
	buildApplicationDocumentsApi,
	describeIfToken,
} from "../helpers/api";
import {
	createCustomDocumentOrSkip,
	uploadFrontOrSkip,
} from "../helpers/applicationDocuments";
import { getOrCreateSharedBusinessApp } from "../helpers/sharedApp";

describeIfToken("ApplicationDocumentsApi.uploadApplicationDocument", () => {
	it("uploads an application document file", async () => {
		const api = buildApplicationDocumentsApi();
		const shared = await getOrCreateSharedBusinessApp();

		const documentId = await createCustomDocumentOrSkip(api, shared.id);
		if (!documentId) return;

		const result = await uploadFrontOrSkip(api, shared.id, documentId);
		if (!result) return;

		expect(result.status).toBe(200);
		expect(result.data.data.id).toBe(documentId);
		expect(result.data.data.attributes).toBeDefined();
	});
});
