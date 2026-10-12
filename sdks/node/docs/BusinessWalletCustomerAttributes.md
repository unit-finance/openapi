# BusinessWalletCustomerAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**bankName** | **string** | The name of the bank partner this customer is about to create a wallet under. | [default to undefined]
**businessName** | **string** | The name of the business this customer represents. | [default to undefined]
**name** | **string** | The official name. | [default to undefined]
**address** | [**AddressType**](AddressType.md) | Address of the business. | [default to undefined]
**ein** | **string** | Business EIN (numbers only). | [default to undefined]
**businessVertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. | [default to undefined]
**numberOfEmployees** | [**NumberOfEmployeesType**](NumberOfEmployeesType.md) | The number of employees working for this business. | [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. | [optional] [default to undefined]

## Example

```typescript
import { BusinessWalletCustomerAttributes } from 'unit-openapi-node-sdk';

const instance: BusinessWalletCustomerAttributes = {
    createdAt,
    bankName,
    businessName,
    name,
    address,
    ein,
    businessVertical,
    numberOfEmployees,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
