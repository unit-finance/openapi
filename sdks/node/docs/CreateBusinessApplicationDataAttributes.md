# CreateBusinessApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the business. | [default to undefined]
**dba** | **string** | Optional. \&quot;Doing business as\&quot;. | [optional] [default to undefined]
**address** | [**AddressType**](AddressType.md) | Address of the business. Must be a US address | [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | Phone number of the business. | [default to undefined]
**stateOfIncorporation** | **string** | Two letters representing a US state. | [default to undefined]
**ein** | **string** | Business EIN (numbers only). | [default to undefined]
**entityType** | **string** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the sandbox also accepts Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid rejecting values the live API accepts. | [default to undefined]
**website** | **string** | A Valid website Url. Providing a null value is indicative of the business customer attesting that they do not have a website. | [default to undefined]
**contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. This person is the one that will have access to the account. | [default to undefined]
**officer** | [**OfficerRequestType**](OfficerRequestType.md) | Officer representing the business (must be the CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member). To onboard a business successfully, you must provide the officer\&#39;s personal details. | [default to undefined]
**beneficialOwners** | [**Array&lt;BeneficialOwnerRequestType&gt;**](BeneficialOwnerRequestType.md) | Array of beneficial owners in the business. Beneficial owners are all people that, directly or indirectly, own 25% or more of the business. To onboard a business successfully, you must provide each beneficial owner\&#39;s personal details. If the business has no beneficial owners, the array should be empty. | [default to undefined]
**annualRevenue** | [**BusinessAnnualRevenueType**](BusinessAnnualRevenueType.md) | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Annual revenue of the business. | [default to undefined]
**numberOfEmployees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Number of employees of the business. | [default to undefined]
**cashFlow** | [**CashFlowType**](CashFlowType.md) | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Cash flow of the business. | [default to undefined]
**yearOfIncorporation** | **string** | Required. Year of incorporation of the business as a 4-digit year string (e.g., \&quot;2014\&quot;). | [default to undefined]
**countriesOfOperation** | **Array&lt;string&gt;** | Required if any of the officer / BeneficialOwner of the business have a non US nationality. An array of two letter codes representing the countries of operation of the business. | [default to undefined]
**stockSymbol** | **string** | Optional. The stock symbol (ticker) of the business. | [optional] [default to undefined]
**businessVertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. | [default to undefined]
**ip** | **string** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]
**deviceFingerprints** | [**Array&lt;DeviceFingerprintType&gt;**](DeviceFingerprintType.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). | [optional] [default to undefined]
**banks** | **Array&lt;string&gt;** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org\&#39;s default bank (visible via Org Settings in the Dashboard). | [optional] [default to undefined]
**requestedProducts** | [**Array&lt;RequestedProductType&gt;**](RequestedProductType.md) | Optional. The product being applied for. Contact Unit to enable BillPay and Capital products. | [optional] [default to undefined]

## Example

```typescript
import { CreateBusinessApplicationDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateBusinessApplicationDataAttributes = {
    name,
    dba,
    address,
    phone,
    stateOfIncorporation,
    ein,
    entityType,
    website,
    contact,
    officer,
    beneficialOwners,
    annualRevenue,
    numberOfEmployees,
    cashFlow,
    yearOfIncorporation,
    countriesOfOperation,
    stockSymbol,
    businessVertical,
    ip,
    tags,
    idempotencyKey,
    deviceFingerprints,
    banks,
    requestedProducts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
