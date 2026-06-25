import { buildApi, describeIfToken } from "../helpers/api";
import { buildCancelableIndividualApplicationRequest } from "../helpers/fixtures";

describeIfToken("ApplicationsApi.cancelApplication", () => {
	it("cancels an AwaitingDocuments individual application", async () => {
		const api = buildApi();

		// Cancel is only valid for applications in `PendingReview` or
		// `AwaitingDocuments`. Business applications auto-approve in the sandbox
		// (even with a magic officer SSN), so this suite creates an individual
		// applicant (SSN `000000003`) that lands in `AwaitingDocuments`.
		const created = await api.createApplication({
			createApplicationRequest:
				buildCancelableIndividualApplicationRequest(),
		});
		expect(created.status).toBe(201);
		const id = created.data.data.id;

		const { data, status } = await api.cancelApplication({
			id,
			cancelApplicationRequest: {
				data: {
					type: "applicationCancel",
					attributes: { reason: "By user request via SDK integration test" },
				},
			},
		});

		expect(status).toBe(201);
		expect(data.data.id).toBe(id);
		expect(data.data.attributes.status).toBe("Canceled");
	});
});
