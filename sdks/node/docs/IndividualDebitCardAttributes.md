# IndividualDebitCardAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [optional] [default to undefined]
**last4Digits** | **string** | Last 4 digits of the debit card. | [default to undefined]
**expirationDate** | **string** | Card expiration date, formatted YYYY-MM, e.g \&quot;2020-05\&quot;. | [default to undefined]
**shippingAddress** | [**AddressType**](AddressType.md) | Shipping address, if specified. | [optional] [default to undefined]
**bin** | **string** | 9-digit Bank Identification Number (BIN). | [default to undefined]
**status** | **string** | Status of the card, one of: Active, Inactive, Stolen, Lost, Frozen, ClosedByCustomer, SuspectedFraud. | [default to undefined]
**design** | **string** | Card design, if specified. | [optional] [default to undefined]

## Example

```typescript
import { IndividualDebitCardAttributes } from 'unit-openapi-node-sdk';

const instance: IndividualDebitCardAttributes = {
    createdAt,
    updatedAt,
    last4Digits,
    expirationDate,
    shippingAddress,
    bin,
    status,
    design,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
