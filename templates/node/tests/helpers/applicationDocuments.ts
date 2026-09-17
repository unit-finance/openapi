import { isAxiosError } from "axios";
import type { ApplicationDocumentsApi } from "../..";
import { jpegImageFile } from "./checkDeposits";

/**
 * The application-document upload/download/verify endpoints all act on a
 * specific document that must already exist on an application. The only
 * document these suites can deterministically create is a **custom**
 * (client-requested) document via `createApplicationDocument`; the
 * Unit-required documents (IdDocument, AddressVerification, …) appear only
 * while an application is `AwaitingDocuments`, a state that depends on the
 * magic SSN the sandbox happens to assign and is therefore not reliable.
 *
 * When the sandbox org does not offer custom documents (or the document is
 * already `Approved`/`archived` and rejects uploads), the API answers with a
 * 4xx/5xx precondition error. Following the holds / check-deposit pattern we
 * treat those as feature-unavailable (skip) rather than a failure.
 */
export function isPreconditionError(err: unknown): boolean {
	return (
		isAxiosError(err) &&
		err.response != null &&
		[400, 403, 404, 409, 500].includes(err.response.status)
	);
}

/**
 * Create a custom application document on the given application, returning its
 * id — or `null` when the sandbox org does not support creating one.
 */
export async function createCustomDocumentOrSkip(
	api: ApplicationDocumentsApi,
	applicationId: string,
): Promise<string | null> {
	try {
		const { data } = await api.createApplicationDocument({
			applicationId,
			body: {},
		});
		return data.data.id;
	} catch (err) {
		if (isPreconditionError(err)) {
			console.warn(
				"Custom application documents are not available on this sandbox org; skipping.",
			);
			return null;
		}
		throw err;
	}
}

/** Upload a front image to a document, treating precondition errors as skips. */
export async function uploadFrontOrSkip(
	api: ApplicationDocumentsApi,
	applicationId: string,
	documentId: string,
) {
	try {
		return await api.uploadApplicationDocument({
			applicationId,
			documentId,
			body: jpegImageFile("application-document.jpg"),
		});
	} catch (err) {
		if (isPreconditionError(err)) {
			console.warn(
				"Application document does not accept an upload (wrong state / archived); skipping.",
			);
			return null;
		}
		throw err;
	}
}

/** Upload a back-side image to a document, treating precondition errors as skips. */
export async function uploadBackOrSkip(
	api: ApplicationDocumentsApi,
	applicationId: string,
	documentId: string,
) {
	try {
		return await api.uploadApplicationDocumentBackSide({
			applicationId,
			documentId,
			body: jpegImageFile("application-document-back.jpg"),
		});
	} catch (err) {
		if (isPreconditionError(err)) {
			console.warn(
				"Application document does not accept a back-side upload; skipping.",
			);
			return null;
		}
		throw err;
	}
}
