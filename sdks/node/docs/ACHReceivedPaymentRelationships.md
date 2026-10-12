# ACHReceivedPaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**customer** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**receivePaymentTransaction** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**paymentAdvanceTransaction** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**repayPaymentAdvanceTransaction** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**stopPayment** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ACHReceivedPaymentRelationships } from 'unit-openapi-node-sdk';

const instance: ACHReceivedPaymentRelationships = {
    account,
    customer,
    receivePaymentTransaction,
    paymentAdvanceTransaction,
    repayPaymentAdvanceTransaction,
    stopPayment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
