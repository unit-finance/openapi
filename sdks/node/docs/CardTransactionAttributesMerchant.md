# CardTransactionAttributesMerchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the merchant. | [optional] [default to undefined]
**type** | **number** | The 4-digit ISO 18245 merchant category code (MCC). | [optional] [default to undefined]
**category** | **string** | The merchant category, described by the MCC code (see this reference for the list of category descriptions). | [optional] [default to undefined]
**location** | **string** | The location (city, state, etc.) of the merchant. | [optional] [default to undefined]
**id** | **string** | The unique network merchant identifier. | [optional] [default to undefined]

## Example

```typescript
import { CardTransactionAttributesMerchant } from '@unit-finance/unit-node-sdk';

const instance: CardTransactionAttributesMerchant = {
    name,
    type,
    category,
    location,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
