# BusinessCustomerAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**name** | **string** | Name of the business. | [default to undefined]
**dba** | **string** | Optional. \&quot;Doing business as\&quot;. | [optional] [default to undefined]
**address** | [**AddressType**](AddressType.md) | Address of the business. | [default to undefined]
**operatingAddress** | [**AddressType**](AddressType.md) | Optional. The operating address of the business. | [optional] [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | Phone of the business. | [default to undefined]
**stateOfIncorporation** | **string** | Two letters representing a US state. | [default to undefined]
**ein** | **string** | Business EIN (numbers only). | [default to undefined]
**entityType** | **string** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the live API also returns Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid breaking strict client deserialization on undocumented values. | [default to undefined]
**contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. | [default to undefined]
**annualRevenue** | [**AnnualRevenueType**](AnnualRevenueType.md) | Optional. Annual revenue of the business. | [optional] [default to undefined]
**numberOfEmployees** | [**NumberOfEmployeesType**](NumberOfEmployeesType.md) | Optional. Number of employees of the business. | [optional] [default to undefined]
**businessVertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | Optional. Business vertical of the business. | [optional] [default to undefined]
**cashFlow** | [**CashFlowType**](CashFlowType.md) | Optional. Cash flow of the business. | [optional] [default to undefined]
**countriesOfOperation** | **Array&lt;string&gt;** | Optional. Countries where the business operates. | [optional] [default to undefined]
**website** | **string** | Optional. Business\&#39;s website. | [optional] [default to undefined]
**stockSymbol** | **string** | Optional. The stock symbol (ticker) of the business. | [optional] [default to undefined]
**yearOfIncorporation** | **string** | Optional. Year of incorporation of the business. | [optional] [default to undefined]
**authorizedUsers** | [**Array&lt;AuthorizedUserType&gt;**](AuthorizedUserType.md) | Array of authorized users. An authorized user is someone who can participate in the One Time Password (OTP) authentication process. | [default to undefined]
**status** | **string** | Status of the customer, either Active or Archived. You can\&#39;t do any write operations on an Archived customer. | [default to undefined]
**eligibleProducts** | [**Array&lt;ProductType&gt;**](ProductType.md) | Optional. The products that the customer is eligible for. | [optional] [default to undefined]
**archiveReason** | **string** | Optional, only if the customer status is Archived. The reason the customer was archived, can be one of ByBank, Inactive, FraudACHActivity, FraudCardActivity, FraudCheckActivity, FraudApplicationHistory, FraudAccountActivity, FraudClientIdentified, FraudLinkedToFraudulentCustomer. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Inherited from the application tags (see Tag Inheritance). | [default to undefined]

## Example

```typescript
import { BusinessCustomerAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: BusinessCustomerAttributes = {
    createdAt,
    name,
    dba,
    address,
    operatingAddress,
    phone,
    stateOfIncorporation,
    ein,
    entityType,
    contact,
    annualRevenue,
    numberOfEmployees,
    businessVertical,
    cashFlow,
    countriesOfOperation,
    website,
    stockSymbol,
    yearOfIncorporation,
    authorizedUsers,
    status,
    eligibleProducts,
    archiveReason,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
