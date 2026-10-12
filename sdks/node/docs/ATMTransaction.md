# ATMTransaction

`AtmTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ATMTransactionAttributes**](ATMTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**ATMTransactionRelationships**](ATMTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ATMTransaction } from 'unit-openapi-node-sdk';

const instance: ATMTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
