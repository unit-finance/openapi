# UnitFinanceSdk::BusinessCustomerAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **name** | **String** | Name of the business. |  |
| **dba** | **String** | Optional. \&quot;Doing business as\&quot;. | [optional] |
| **address** | [**AddressType**](AddressType.md) | Address of the business. |  |
| **operating_address** | [**AddressType**](AddressType.md) | Optional. The operating address of the business. | [optional] |
| **phone** | [**PhoneType**](PhoneType.md) | Phone of the business. |  |
| **state_of_incorporation** | **String** | Two letters representing a US state. |  |
| **ein** | **String** | Business EIN (numbers only). |  |
| **entity_type** | **String** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the live API also returns Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid breaking strict client deserialization on undocumented values. |  |
| **contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. |  |
| **annual_revenue** | [**AnnualRevenueType**](AnnualRevenueType.md) | Optional. Annual revenue of the business. | [optional] |
| **number_of_employees** | [**NumberOfEmployeesType**](NumberOfEmployeesType.md) | Optional. Number of employees of the business. | [optional] |
| **business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | Optional. Business vertical of the business. | [optional] |
| **cash_flow** | [**CashFlowType**](CashFlowType.md) | Optional. Cash flow of the business. | [optional] |
| **countries_of_operation** | **Array&lt;String&gt;** | Optional. Countries where the business operates. | [optional] |
| **website** | **String** | Optional. Business&#39;s website. | [optional] |
| **stock_symbol** | **String** | Optional. The stock symbol (ticker) of the business. | [optional] |
| **year_of_incorporation** | **String** | Optional. Year of incorporation of the business. | [optional] |
| **authorized_users** | [**Array&lt;AuthorizedUserType&gt;**](AuthorizedUserType.md) | Array of authorized users. An authorized user is someone who can participate in the One Time Password (OTP) authentication process. |  |
| **status** | **String** | Status of the customer, either Active or Archived. You can&#39;t do any write operations on an Archived customer. |  |
| **eligible_products** | [**Array&lt;ProductType&gt;**](ProductType.md) | Optional. The products that the customer is eligible for. | [optional] |
| **archive_reason** | **String** | Optional, only if the customer status is Archived. The reason the customer was archived, can be one of ByBank, Inactive, FraudACHActivity, FraudCardActivity, FraudCheckActivity, FraudApplicationHistory, FraudAccountActivity, FraudClientIdentified, FraudLinkedToFraudulentCustomer. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Inherited from the application tags (see Tag Inheritance). |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::BusinessCustomerAttributes.new(
  created_at: null,
  name: null,
  dba: null,
  address: null,
  operating_address: null,
  phone: null,
  state_of_incorporation: null,
  ein: null,
  entity_type: null,
  contact: null,
  annual_revenue: null,
  number_of_employees: null,
  business_vertical: null,
  cash_flow: null,
  countries_of_operation: null,
  website: null,
  stock_symbol: null,
  year_of_incorporation: null,
  authorized_users: null,
  status: null,
  eligible_products: null,
  archive_reason: null,
  tags: null
)
```

