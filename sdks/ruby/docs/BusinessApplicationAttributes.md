# UnitFinanceSdk::BusinessApplicationAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | One of AwaitingDocuments, PendingReview, Approved, Denied or Pending, see Application Statuses. |  |
| **message** | **String** | A message describing the BusinessApplication status. |  |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | Optional. The date the resource was updated. | [optional] |
| **name** | **String** | Name of the business. |  |
| **dba** | **String** | Optional. \&quot;Doing business as\&quot;. | [optional] |
| **address** | [**AddressType**](AddressType.md) | Address of the business. |  |
| **operating_address** | [**AddressType**](AddressType.md) | Optional. The operating address of the business. Required when the address is of a registered agent or if any beneficial owner or officer is non-US. | [optional] |
| **phone** | [**PhoneType**](PhoneType.md) | Phone of the business. |  |
| **state_of_incorporation** | **String** | Two letters representing a US state. |  |
| **ein** | **String** | Business EIN (numbers only). |  |
| **industry** | [**IndustryType**](IndustryType.md) | Optional. Business industry, if specified. | [optional] |
| **entity_type** | **String** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the live API also returns Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid breaking strict client deserialization on undocumented values. |  |
| **website** | **String** | Optional. Business&#39;s website. | [optional] |
| **contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. |  |
| **officer** | [**OfficerType**](OfficerType.md) | Officer representing the business, must be the CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. The officer would need to go over KYC process and provide documents. |  |
| **beneficial_owners** | [**Array&lt;BeneficialOwnerType&gt;**](BeneficialOwnerType.md) |  |  |
| **annual_revenue** | [**AnnualRevenueType**](AnnualRevenueType.md) | Optional. Annual revenue of the business. | [optional] |
| **number_of_employees** | [**NumberOfEmployeesType**](NumberOfEmployeesType.md) | Optional. Number of employees of the business. | [optional] |
| **cash_flow** | [**CashFlowType**](CashFlowType.md) | Optional. Cash flow of the business. | [optional] |
| **year_of_incorporation** | **String** | Year of incorporation of the business. |  |
| **countries_of_operation** | **Array&lt;String&gt;** | Optional. An array of two letter codes representing the countries of operation of the business. | [optional] |
| **stock_symbol** | **String** | Optional. The stock symbol (ticker) of the business. | [optional] |
| **business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. |  |
| **ip** | **String** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] |
| **archived** | **Boolean** | Indicates whether the application has been archived. Archived applications are read-only and no changes can be made to them. An application becomes archived once the corresponding customer is archived. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::BusinessApplicationAttributes.new(
  status: null,
  message: null,
  created_at: null,
  updated_at: null,
  name: null,
  dba: null,
  address: null,
  operating_address: null,
  phone: null,
  state_of_incorporation: null,
  ein: null,
  industry: null,
  entity_type: null,
  website: null,
  contact: null,
  officer: null,
  beneficial_owners: null,
  annual_revenue: null,
  number_of_employees: null,
  cash_flow: null,
  year_of_incorporation: null,
  countries_of_operation: null,
  stock_symbol: null,
  business_vertical: null,
  ip: null,
  archived: null,
  tags: null
)
```

