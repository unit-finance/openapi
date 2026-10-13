# CheckPaymentPositivePayAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**status** | **string** | One of Active, Expired, or Cancelled. | [default to undefined]
**checkNumber** | **string** | Check number to authorize. | [default to undefined]
**payeeName** | **string** | Payee name to add specificity. | [optional] [default to undefined]
**amount** | **number** | Expected amount in cents. | [default to undefined]
**expirationDate** | **string** | When the authorization expires. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { CheckPaymentPositivePayAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CheckPaymentPositivePayAttributes = {
    createdAt,
    status,
    checkNumber,
    payeeName,
    amount,
    expirationDate,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
