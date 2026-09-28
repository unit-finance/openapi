import { buildPositivePayApi, describeIfToken } from "../helpers/api";
import { createWireDrawdownPositivePayId } from "../helpers/positivePay";

/** The smallest byte sequence the sandbox accepts as an `application/pdf` body. */
const MINIMAL_PDF = Buffer.from(
	"%PDF-1.4\n1 0 obj<</Type/Catalog>>endobj\ntrailer<</Root 1 0 R>>\n%%EOF\n",
	"utf8",
);

describeIfToken("PositivePayApi.uploadPositivePayDocument", () => {
	it("activates a drawdown rule by uploading its document", async () => {
		const api = buildPositivePayApi();
		// Only the drawdown variant is created `AwaitingDocuments`; the other two
		// are already `Active` and answer this upload with 400.
		const positivePayId = await createWireDrawdownPositivePayId();

		const response = await api.uploadPositivePayDocument(
			// The generated parameter is typed `File` (the spec models the body as
			// `string`/`binary`), but axios needs the raw bytes on Node.
			{ positivePayId, body: MINIMAL_PDF as unknown as File },
			{ headers: { "Content-Type": "application/pdf" } },
		);

		expect(response.status).toBe(200);
		// The spec declares no response content for this operation, so the
		// generated client types the body as `void`. The sandbox does return the
		// activated rule; read it untyped. Tracked in SLICES.md.
		const body = response.data as unknown as {
			data?: { id?: string; type?: string; attributes?: unknown };
		};
		expect(body.data?.id).toBe(positivePayId);
		expect(body.data?.type).toBe("drawdownPositivePay");
		expect(body.data?.attributes).toBeDefined();
	});
});
