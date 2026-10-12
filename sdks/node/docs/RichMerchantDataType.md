# RichMerchantDataType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the merchant. | [default to undefined]
**website** | **string** | URL of the merchant\&#39;s website. | [optional] [default to undefined]
**logo** | **string** | URL of the merchant\&#39;s logo. | [optional] [default to undefined]
**phone** | **string** | Phone number of the merchant. | [optional] [default to undefined]
**categories** | [**Array&lt;RichMerchantDataTypeCategoriesInner&gt;**](RichMerchantDataTypeCategoriesInner.md) | Array of categories the merchant belongs to (from the least specific to the most specific). | [optional] [default to undefined]
**address** | [**RichMerchantDataTypeAddress**](RichMerchantDataTypeAddress.md) |  | [optional] [default to undefined]
**coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of the merchant. | [optional] [default to undefined]
**facilitators** | **Array&lt;{ [key: string]: any; }&gt;** | The transaction facilitators. | [optional] [default to undefined]

## Example

```typescript
import { RichMerchantDataType } from 'unit-openapi-node-sdk';

const instance: RichMerchantDataType = {
    name,
    website,
    logo,
    phone,
    categories,
    address,
    coordinates,
    facilitators,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
