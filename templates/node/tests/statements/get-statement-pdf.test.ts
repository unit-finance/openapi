import { buildStatementsApi, describeIfToken } from "../helpers/api";
import { STATEMENTS_TIMEOUT_MS, getStatementId } from "../helpers/statements";

describeIfToken("StatementsApi.getStatementPdf", () => {
	it(
		"downloads a statement as PDF",
		async () => {
			const id = await getStatementId();
			if (!id) return;

			const api = buildStatementsApi();
			const { data, status } = await api.getStatementPdf({ id });

			expect(status).toBe(200);
			expect(data).toBeDefined();
		},
		STATEMENTS_TIMEOUT_MS,
	);
});
