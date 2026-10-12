# UpdateIndividualCustomerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressType**](AddressType.md) | Address of the individual. To modify or add specify the new address. | [optional] [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | Phone of the individual. To modify or add specify the new phone number. | [optional] [default to undefined]
**email** | **string** | Email address of the individual. To modify or add specify the new email address. | [optional] [default to undefined]
**dba** | **string** | If the individual is a sole proprietor who is doing business under a different name. To modify or add specify the new dba name. | [optional] [default to undefined]
**numberOfEmployees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Number of employees if the customer is a sole proprietor. | [optional] [default to undefined]
**businessVertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | Business vertical if the customer is a sole proprietor. | [optional] [default to undefined]
**occupation** | [**OccupationType**](OccupationType.md) | Occupation of the individual. | [optional] [default to undefined]
**annualIncome** | [**AnnualIncomeType**](AnnualIncomeType.md) | Annual income of the individual. | [optional] [default to undefined]
**annualRevenue** | [**AnnualRevenueType**](AnnualRevenueType.md) | Annual revenue if the customer is a sole proprietor. | [optional] [default to undefined]
**website** | **string** | Business\&#39;s website if the customer is a sole proprietor. | [optional] [default to undefined]
**sourceOfIncome** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Source of income of the individual. | [optional] [default to undefined]
**authorizedUsers** | [**Array&lt;AuthorizedUserType&gt;**](AuthorizedUserType.md) | Array of authorized users. The provided array items will replace the existing ones. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Updating Tags. | [optional] [default to undefined]
**jwtSubject** | **string** | See this section for more information. | [optional] [default to undefined]

## Example

```typescript
import { UpdateIndividualCustomerDataAttributes } from 'unit-openapi-node-sdk';

const instance: UpdateIndividualCustomerDataAttributes = {
    address,
    phone,
    email,
    dba,
    numberOfEmployees,
    businessVertical,
    occupation,
    annualIncome,
    annualRevenue,
    website,
    sourceOfIncome,
    authorizedUsers,
    tags,
    jwtSubject,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
