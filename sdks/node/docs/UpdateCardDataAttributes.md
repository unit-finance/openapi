# UpdateCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingAddress** | [**AddressType**](AddressType.md) | Address to ship the card to. | [optional] [default to undefined]
**address** | [**AddressType**](AddressType.md) | Address of the card holder. | [optional] [default to undefined]
**email** | **string** | Email address of the card holder. | [optional] [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. | [optional] [default to undefined]
**dateOfBirth** | **string** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). | [optional] [default to undefined]

## Example

```typescript
import { UpdateCardDataAttributes } from 'unit-openapi-node-sdk';

const instance: UpdateCardDataAttributes = {
    shippingAddress,
    address,
    email,
    phone,
    dateOfBirth,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
