import { buildStatementsApi, describeIfToken } from "../helpers/api";
import { STATEMENTS_TIMEOUT_MS } from "../helpers/statements";

describeIfToken("StatementsApi.listStatements", () => {
	// No page-size assertion: `/statements` accepts `page[limit]` but ignores
	// it — the sandbox returns every statement of the period regardless. That
	// is an API/spec mismatch owned by `unit-openapi`, so the suite asserts
	// envelope shape only, with a timeout sized for the unpaged response.
	it(
		"returns a JSON:API list",
		async () => {
			const api = buildStatementsApi();

			const { data, status } = await api.listStatements({ pageLimit: "20" });

			expect(status).toBe(200);
			expect(Array.isArray(data.data)).toBe(true);
			for (const statement of data.data) {
				expect(typeof statement.id).toBe("string");
				// The spec names this resource `statement`; the sandbox answers
				// with `accountStatementDTO`. Spec defect owned by `unit-openapi`.
				expect(statement.type).toBe("accountStatementDTO");
				expect(statement.attributes).toBeDefined();
			}
		},
		STATEMENTS_TIMEOUT_MS,
	);
});
