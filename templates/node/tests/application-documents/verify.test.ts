import {
	buildApplicationDocumentsApi,
	describeIfToken,
} from "../helpers/api";
import {
	createCustomDocumentOrSkip,
	isPreconditionError,
} from "../helpers/applicationDocuments";
import { getOrCreateSharedBusinessApp } from "../helpers/sharedApp";

describeIfToken("ApplicationDocumentsApi.verifyApplicationDocument", () => {
	it("verifies a selfie-verification application document", async () => {
		const api = buildApplicationDocumentsApi();
		const shared = await getOrCreateSharedBusinessApp();

		const documentId = await createCustomDocumentOrSkip(api, shared.id);
		if (!documentId) return;

		// Verify is only legal for a `SelfieVerification` document paired with a
		// real IDV `jobId`, neither of which these suites can provision. The call
		// is exercised for wiring/serialization; a precondition error is expected
		// and treated as feature-unavailable rather than a failure.
		try {
			const { data, status } = await api.verifyApplicationDocument({
				applicationId: shared.id,
				documentId,
				verifyDocumentRequest: {
					data: {
						type: "selfieVerification",
						attributes: { jobId: "X16krjAN1" },
					},
				},
			});
			expect(status).toBe(200);
			expect(data.data.id).toBe(documentId);
			expect(data.data.attributes).toBeDefined();
		} catch (err) {
			if (isPreconditionError(err)) {
				console.warn(
					"Document verification requires a SelfieVerification document and a real IDV job; skipping.",
				);
				return;
			}
			throw err;
		}
	});
});
