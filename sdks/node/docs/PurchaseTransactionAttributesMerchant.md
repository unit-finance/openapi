# PurchaseTransactionAttributesMerchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the merchant. | [default to undefined]
**type** | **number** | The 4-digit ISO 18245 merchant category code (MCC). | [default to undefined]
**category** | **string** | The merchant category, described by the MCC code (see this reference for the list of category descriptions). | [default to undefined]
**location** | **string** | The location (city, state, etc.) of the merchant. | [optional] [default to undefined]
**id** | **string** | The unique network merchant identifier. | [optional] [default to undefined]

## Example

```typescript
import { PurchaseTransactionAttributesMerchant } from 'unit-openapi-node-sdk';

const instance: PurchaseTransactionAttributesMerchant = {
    name,
    type,
    category,
    location,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
