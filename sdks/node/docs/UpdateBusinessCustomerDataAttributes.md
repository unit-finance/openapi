# UpdateBusinessCustomerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressType**](AddressType.md) | Address of the business. To modify specify the new address. | [optional] [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | Phone of the business. To modify specify the new phone number. | [optional] [default to undefined]
**contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. | [optional] [default to undefined]
**authorizedUsers** | [**Array&lt;AuthorizedUserType&gt;**](AuthorizedUserType.md) | Array of authorized users. The provided array items will replace the existing ones. | [optional] [default to undefined]
**dba** | **string** | To modify or add specify the new dba name. | [optional] [default to undefined]
**businessVertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. | [optional] [default to undefined]
**numberOfEmployees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Number of employees of the business. | [optional] [default to undefined]
**annualRevenue** | [**AnnualRevenueType**](AnnualRevenueType.md) | Annual revenue of the business. | [optional] [default to undefined]
**cashFlow** | [**CashFlowType**](CashFlowType.md) | Cash flow of the business. | [optional] [default to undefined]
**countriesOfOperation** | **Array&lt;string&gt;** | Countries where the business operates. | [optional] [default to undefined]
**website** | **string** | Business\&#39;s website. | [optional] [default to undefined]
**stockSymbol** | **string** | Stock symbol (ticker) of the business. | [optional] [default to undefined]
**yearOfIncorporation** | **string** | Year of incorporation of the business. | [optional] [default to undefined]
**operatingAddress** | [**AddressType**](AddressType.md) | The operating address of the business. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Updating Tags. | [optional] [default to undefined]

## Example

```typescript
import { UpdateBusinessCustomerDataAttributes } from 'unit-openapi-node-sdk';

const instance: UpdateBusinessCustomerDataAttributes = {
    address,
    phone,
    contact,
    authorizedUsers,
    dba,
    businessVertical,
    numberOfEmployees,
    annualRevenue,
    cashFlow,
    countriesOfOperation,
    website,
    stockSymbol,
    yearOfIncorporation,
    operatingAddress,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
