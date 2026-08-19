# BusinessApplicationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | One of AwaitingDocuments, PendingReview, Approved, Denied or Pending, see Application Statuses. | [default to undefined]
**message** | **string** | A message describing the BusinessApplication status. | [default to undefined]
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | Optional. The date the resource was updated. | [optional] [default to undefined]
**name** | **string** | Name of the business. | [default to undefined]
**dba** | **string** | Optional. \&quot;Doing business as\&quot;. | [optional] [default to undefined]
**address** | [**Address**](Address.md) | Address of the business. | [default to undefined]
**operatingAddress** | [**Address**](Address.md) | Optional. The operating address of the business. Required when the address is of a registered agent or if any beneficial owner or officer is non-US. | [optional] [default to undefined]
**phone** | [**Phone**](Phone.md) | Phone of the business. | [default to undefined]
**stateOfIncorporation** | **string** | Two letters representing a US state. | [default to undefined]
**ein** | **string** | Business EIN (numbers only). | [default to undefined]
**industry** | [**Industry**](Industry.md) | Optional. Business industry, if specified. | [optional] [default to undefined]
**entityType** | **string** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the live API also returns Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid breaking strict client deserialization on undocumented values. | [default to undefined]
**website** | **string** | Optional. Business\&#39;s website. | [optional] [default to undefined]
**contact** | [**BusinessContact**](BusinessContact.md) | Primary contact of the business. | [default to undefined]
**officer** | [**Officer**](Officer.md) | Officer representing the business, must be the CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. The officer would need to go over KYC process and provide documents. | [default to undefined]
**beneficialOwners** | [**Array&lt;BeneficialOwner2&gt;**](BeneficialOwner2.md) |  | [default to undefined]
**annualRevenue** | [**AnnualRevenue**](AnnualRevenue.md) | Optional. Annual revenue of the business. | [optional] [default to undefined]
**numberOfEmployees** | [**NumberOfEmployees**](NumberOfEmployees.md) | Optional. Number of employees of the business. | [optional] [default to undefined]
**cashFlow** | [**CashFlow**](CashFlow.md) | Optional. Cash flow of the business. | [optional] [default to undefined]
**yearOfIncorporation** | **string** | Year of incorporation of the business. | [default to undefined]
**countriesOfOperation** | **Array&lt;string&gt;** | Optional. An array of two letter codes representing the countries of operation of the business. | [optional] [default to undefined]
**stockSymbol** | **string** | Optional. The stock symbol (ticker) of the business. | [optional] [default to undefined]
**businessVertical** | [**BusinessVertical**](BusinessVertical.md) | The business vertical of the business. | [default to undefined]
**ip** | **string** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] [default to undefined]
**archived** | **boolean** | Indicates whether the application has been archived. Archived applications are read-only and no changes can be made to them. An application becomes archived once the corresponding customer is archived. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { BusinessApplicationAttributes } from '@unit-finance/unit-node-sdk';

const instance: BusinessApplicationAttributes = {
    status,
    message,
    createdAt,
    updatedAt,
    name,
    dba,
    address,
    operatingAddress,
    phone,
    stateOfIncorporation,
    ein,
    industry,
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
    archived,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
