# AddressType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street** | **string** | First line of an address. | [default to undefined]
**street2** | **string** | Optional. Second line of an address. | [optional] [default to undefined]
**city** | **string** | City. | [default to undefined]
**state** | **string** | State. For US and CA addresses, two letters representing the state (US) or province (CA). | [default to undefined]
**postalCode** | **string** | Postal code. | [default to undefined]
**country** | **string** | Two letters representing the country. | [default to undefined]

## Example

```typescript
import { AddressType } from '@unit-finance/unit-node-sdk';

const instance: AddressType = {
    street,
    street2,
    city,
    state,
    postalCode,
    country,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
