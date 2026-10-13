# CashDepositBarcodeAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcodeNumber** | **string** | Unique identifier of the barcode. This field will be used in Get Barcode Image by Barcode Number endpoint. | [default to undefined]
**expiration** | **string** | The expiration date and time of the barcode. | [default to undefined]
**storeId** | **string** | Identifier of the retail store that supports Cash Deposits. This field is obtained from either List by coordinates or List by postal code endpoints. | [default to undefined]
**retailerName** | **string** | Name of the retailer store that supports Cash Deposits. | [default to undefined]

## Example

```typescript
import { CashDepositBarcodeAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CashDepositBarcodeAttributes = {
    barcodeNumber,
    expiration,
    storeId,
    retailerName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
