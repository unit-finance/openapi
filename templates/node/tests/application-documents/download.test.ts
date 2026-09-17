import {
	buildApplicationDocumentsApi,
	describeIfToken,
} from "../helpers/api";
import {
	createCustomDocumentOrSkip,
	isPreconditionError,
	uploadFrontOrSkip,
} from "../helpers/applicationDocuments";
import { getOrCreateSharedBusinessApp } from "../helpers/sharedApp";

describeIfToken("ApplicationDocumentsApi.downloadApplicationDocument", () => {
	it("downloads an application document file", async () => {
		const api = buildApplicationDocumentsApi();
		const shared = await getOrCreateSharedBusinessApp();

		const documentId = await createCustomDocumentOrSkip(api, shared.id);
		if (!documentId) return;

		// A file must be uploaded before it can be downloaded.
		const uploaded = await uploadFrontOrSkip(api, shared.id, documentId);
		if (!uploaded) return;

		try {
			const { data, status } = await api.downloadApplicationDocument({
				applicationId: shared.id,
				documentId,
			});
			expect(status).toBe(200);
			expect(data).toBeDefined();
		} catch (err) {
			if (isPreconditionError(err)) {
				console.warn(
					"Application document file is not downloadable for this sandbox org; skipping.",
				);
				return;
			}
			throw err;
		}
	});
});
