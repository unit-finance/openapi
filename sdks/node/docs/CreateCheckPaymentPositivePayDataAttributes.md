# CreateCheckPaymentPositivePayDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkNumber** | **string** | Check number to authorize. | [default to undefined]
**amount** | **number** | Expected amount in cents. Must match within 1$ tolerance. | [default to undefined]
**payeeName** | **string** | Payee name to add specificity. | [optional] [default to undefined]
**expirationDate** | **string** | When the authorization expires. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] [default to undefined]

## Example

```typescript
import { CreateCheckPaymentPositivePayDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CreateCheckPaymentPositivePayDataAttributes = {
    checkNumber,
    amount,
    payeeName,
    expirationDate,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
