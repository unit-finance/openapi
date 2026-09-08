# ReturnedACHTransaction

`ReturnedAchTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ReturnedACHTransactionAttributes**](ReturnedACHTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**ReturnedACHTransactionRelationships**](ReturnedACHTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReturnedACHTransaction } from '@unit-finance/unit-node-sdk';

const instance: ReturnedACHTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
