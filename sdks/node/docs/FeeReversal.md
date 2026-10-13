# FeeReversal

`FeeReversal` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**FeeReversalAttributes**](FeeReversalAttributes.md) |  | [default to undefined]
**relationships** | [**FeeReversalRelationships**](FeeReversalRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FeeReversal } from '@unit-finance/unit-openapi-node-sdk';

const instance: FeeReversal = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
