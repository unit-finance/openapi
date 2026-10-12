# ATMLocationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **string** | Name of the ATM network. | [default to undefined]
**locationName** | **string** | Name of the ATM\&#39;s location. | [default to undefined]
**coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of the ATM. | [default to undefined]
**address** | [**AddressType**](AddressType.md) | Address of the ATM. | [default to undefined]
**distance** | **number** | Distance to the ATM (in miles). | [default to undefined]
**surchargeFree** | **boolean** | Indicates if the ATM is surcharge free. | [default to undefined]
**acceptDeposits** | **boolean** | Indicates if the ATM accepts deposits. | [default to undefined]

## Example

```typescript
import { ATMLocationAttributes } from 'unit-openapi-node-sdk';

const instance: ATMLocationAttributes = {
    network,
    locationName,
    coordinates,
    address,
    distance,
    surchargeFree,
    acceptDeposits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
