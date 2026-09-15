#!/usr/bin/env tsx
/**
 * model-names.ts
 *
 * Shared helpers for reasoning about the model *class* names openapi-generator
 * derives from schema keys.
 *
 * Schemas reach the generator from two places: the keys of
 * `components.schemas`, and inline (non-`$ref`) schemas that
 * `InlineModelResolver` hoists into synthetic keys such as
 * `createCounterparty_request`. Both are then converted to a class name, and
 * two distinct keys can converge on the same one — `createCounterparty_request`
 * and a real `CreateCounterpartyRequest` schema both yield
 * `CreateCounterpartyRequest`.
 *
 * The generators handle that collision badly, and inconsistently: the Ruby
 * example builder looks the class name up, finds the wrapper instead of the
 * member it meant, and recurses into itself until the JVM stack dies, while
 * typescript-axios quietly emits `export type X = X | Y` — a self-referential
 * alias that does not compile. So collisions have to be prevented rather than
 * detected downstream, which is what `fetch-spec` (avoidance) and
 * `check-model-collisions` (enforcement) use these helpers for.
 */

/**
 * Approximates openapi-generator's `toModelName`: split on separators and
 * upper-case the first character of each part, preserving existing inner caps.
 * `createCounterparty_request` -> `CreateCounterpartyRequest`, and an
 * already-PascalCase key is returned unchanged.
 */
export function toClassName(name: string): string {
	return name
		.split(/[^A-Za-z0-9]+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
}

/**
 * `base` if it is still free, otherwise the first `base2`, `base3`, ... that is.
 * Used to pick a replacement name that cannot collide in turn.
 */
export function uniqueClassName(base: string, taken: ReadonlySet<string>): string {
	if (!taken.has(base)) return base;
	for (let i = 2; ; i++) {
		const candidate = `${base}${i}`;
		if (!taken.has(candidate)) return candidate;
	}
}

/**
 * The synthetic key `InlineModelResolver` assigns to an operation's inline
 * request body schema.
 */
export function inlineRequestBodyKey(operationId: string): string {
	return `${operationId}_request`;
}
