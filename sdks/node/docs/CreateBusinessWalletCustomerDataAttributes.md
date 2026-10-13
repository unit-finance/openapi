# CreateBusinessWalletCustomerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankName** | **string** | The name of the bank partner this customer is about to create a wallet under. | [default to undefined]
**businessName** | **string** | The name of the business this customer represents. | [default to undefined]
**address** | [**AddressType**](AddressType.md) | Address of the business. | [default to undefined]
**ein** | **string** | Business EIN (numbers only). | [default to undefined]
**businessVertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. | [default to undefined]
**numberOfEmployees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | The number of employees working for this business. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Updating Tags. | [optional] [default to undefined]

## Example

```typescript
import { CreateBusinessWalletCustomerDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CreateBusinessWalletCustomerDataAttributes = {
    bankName,
    businessName,
    address,
    ein,
    businessVertical,
    numberOfEmployees,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
