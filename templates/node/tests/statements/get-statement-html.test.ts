import { buildStatementsApi, describeIfToken } from "../helpers/api";
import { STATEMENTS_TIMEOUT_MS, getStatementId } from "../helpers/statements";

describeIfToken("StatementsApi.getStatementHtml", () => {
	it(
		"downloads a statement as HTML",
		async () => {
			const id = await getStatementId();
			if (!id) return;

			const api = buildStatementsApi();
			const { data, status } = await api.getStatementHtml({ id });

			expect(status).toBe(200);
			expect(typeof data).toBe("string");
		},
		STATEMENTS_TIMEOUT_MS,
	);
});
