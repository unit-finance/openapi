# CounterpartyType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routingNumber** | **string** | Valid 9-digit ABA routing transit number. | [default to undefined]
**accountNumber** | **string** | Bank account number. | [default to undefined]
**accountType** | **string** | Either Checking, Savings or Loan. | [default to undefined]
**name** | **string** | Name of the person or company that owns the bank account. | [default to undefined]

## Example

```typescript
import { CounterpartyType } from '@unit-finance/unit-openapi-node-sdk';

const instance: CounterpartyType = {
    routingNumber,
    accountNumber,
    accountType,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
