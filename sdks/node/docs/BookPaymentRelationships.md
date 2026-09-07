# BookPaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**customer** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**customers** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**counterpartyAccount** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**counterpartyCustomer** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**transaction** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**recurringPayment** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BookPaymentRelationships } from '@unit-finance/unit-node-sdk';

const instance: BookPaymentRelationships = {
    account,
    customer,
    customers,
    counterpartyAccount,
    counterpartyCustomer,
    transaction,
    recurringPayment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
