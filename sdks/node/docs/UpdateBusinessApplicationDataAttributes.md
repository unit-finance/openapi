# UpdateBusinessApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **{ [key: string]: any; }** | See Updating Tags. | [default to undefined]
**annualRevenue** | [**BusinessAnnualRevenueType**](BusinessAnnualRevenueType.md) | Optional. Annual revenue of the business. | [optional] [default to undefined]
**numberOfEmployees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Optional. Number of employees of the business. | [optional] [default to undefined]
**cashFlow** | [**CashFlowType**](CashFlowType.md) | Optional. Cash flow of the business. | [optional] [default to undefined]
**yearOfIncorporation** | **string** | Optional. Year of incorporation of the business. | [optional] [default to undefined]
**countriesOfOperation** | **Array&lt;string&gt;** | Optional. An array of two letter codes representing the countries of operation of the business. | [optional] [default to undefined]
**stockSymbol** | **string** | Optional. The stock symbol (ticker) of the business. | [optional] [default to undefined]
**website** | **string** | Optional. A Valid website Url. | [optional] [default to undefined]
**businessVertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | Optional. The business vertical of the business. | [optional] [default to undefined]

## Example

```typescript
import { UpdateBusinessApplicationDataAttributes } from 'unit-openapi-node-sdk';

const instance: UpdateBusinessApplicationDataAttributes = {
    tags,
    annualRevenue,
    numberOfEmployees,
    cashFlow,
    yearOfIncorporation,
    countriesOfOperation,
    stockSymbol,
    website,
    businessVertical,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
