# ReturnedWireTransaction

`ReturnedWireTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ReturnedWireTransactionAttributes**](ReturnedWireTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**ReturnedACHTransactionRelationships**](ReturnedACHTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReturnedWireTransaction } from '@unit-finance/unit-node-sdk';

const instance: ReturnedWireTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
