# StoreLocationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storeId** | **string** | Identifier of the retail store that supports Cash Deposits. This field will be used as storeId when Creating a Cash Deposit Barcode. | [default to undefined]
**retailerName** | **string** | Name of the retail store that supports Cash Deposits. | [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | Phone of the retail store. | [default to undefined]
**address** | [**AddressType**](AddressType.md) | Address of the retail store. | [default to undefined]
**coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of the retail store. | [default to undefined]
**distance** | **number** | Distance to the retail store (in miles). | [default to undefined]

## Example

```typescript
import { StoreLocationAttributes } from 'unit-openapi-node-sdk';

const instance: StoreLocationAttributes = {
    storeId,
    retailerName,
    phone,
    address,
    coordinates,
    distance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
