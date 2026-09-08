# ReturnedCheckPaymentTransaction

`ReturnedCheckPaymentTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ReturnedCheckPaymentTransactionAttributes**](ReturnedCheckPaymentTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**CheckPaymentTransactionRelationships**](CheckPaymentTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReturnedCheckPaymentTransaction } from '@unit-finance/unit-node-sdk';

const instance: ReturnedCheckPaymentTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
