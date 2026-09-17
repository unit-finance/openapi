import {
	buildApplicationDocumentsApi,
	describeIfToken,
} from "../helpers/api";
import {
	createCustomDocumentOrSkip,
	isPreconditionError,
	uploadBackOrSkip,
} from "../helpers/applicationDocuments";
import { getOrCreateSharedBusinessApp } from "../helpers/sharedApp";

describeIfToken(
	"ApplicationDocumentsApi.downloadApplicationDocumentBackSide",
	() => {
		it("downloads an application document back-side file", async () => {
			const api = buildApplicationDocumentsApi();
			const shared = await getOrCreateSharedBusinessApp();

			const documentId = await createCustomDocumentOrSkip(api, shared.id);
			if (!documentId) return;

			// A back-side file must be uploaded before it can be downloaded.
			const uploaded = await uploadBackOrSkip(api, shared.id, documentId);
			if (!uploaded) return;

			try {
				const { data, status } =
					await api.downloadApplicationDocumentBackSide({
						applicationId: shared.id,
						documentId,
					});
				expect(status).toBe(200);
				expect(data).toBeDefined();
			} catch (err) {
				if (isPreconditionError(err)) {
					console.warn(
						"Application document back-side is not downloadable for this sandbox org; skipping.",
					);
					return;
				}
				throw err;
			}
		});
	},
);
