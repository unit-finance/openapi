# BookTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**customer** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**customers** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**counterpartyAccount** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**counterpartyCustomer** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**payment** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**recurringPayment** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BookTransactionRelationships } from 'unit-openapi-node-sdk';

const instance: BookTransactionRelationships = {
    account,
    customer,
    customers,
    counterpartyAccount,
    counterpartyCustomer,
    payment,
    recurringPayment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
