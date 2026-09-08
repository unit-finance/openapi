# PaymentCanceledTransaction

The transaction represents an originated ACH that has been canceled by its originator prior to its transmission to the ACH network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**PaymentCanceledTransactionRelationships**](PaymentCanceledTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentCanceledTransaction } from '@unit-finance/unit-node-sdk';

const instance: PaymentCanceledTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
