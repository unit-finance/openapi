# UnitFinanceSdk::CreateBusinessApplicationDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Name of the business. |  |
| **dba** | **String** | Optional. \&quot;Doing business as\&quot;. | [optional] |
| **address** | [**AddressType**](AddressType.md) | Address of the business. Must be a US address |  |
| **phone** | [**PhoneType**](PhoneType.md) | Phone number of the business. |  |
| **state_of_incorporation** | **String** | Two letters representing a US state. |  |
| **ein** | **String** | Business EIN (numbers only). |  |
| **entity_type** | **String** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the sandbox also accepts Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid rejecting values the live API accepts. |  |
| **website** | **String** | A Valid website Url. Providing a null value is indicative of the business customer attesting that they do not have a website. |  |
| **contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. This person is the one that will have access to the account. |  |
| **officer** | [**OfficerRequestType**](OfficerRequestType.md) | Officer representing the business (must be the CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member). To onboard a business successfully, you must provide the officer&#39;s personal details. |  |
| **beneficial_owners** | [**Array&lt;BeneficialOwnerRequestType&gt;**](BeneficialOwnerRequestType.md) | Array of beneficial owners in the business. Beneficial owners are all people that, directly or indirectly, own 25% or more of the business. To onboard a business successfully, you must provide each beneficial owner&#39;s personal details. If the business has no beneficial owners, the array should be empty. |  |
| **annual_revenue** | [**BusinessAnnualRevenueType**](BusinessAnnualRevenueType.md) | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Annual revenue of the business. |  |
| **number_of_employees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Number of employees of the business. |  |
| **cash_flow** | [**CashFlowType**](CashFlowType.md) | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Cash flow of the business. |  |
| **year_of_incorporation** | **String** | Required. Year of incorporation of the business as a 4-digit year string (e.g., \&quot;2014\&quot;). |  |
| **countries_of_operation** | **Array&lt;String&gt;** | Required if any of the officer / BeneficialOwner of the business have a non US nationality. An array of two letter codes representing the countries of operation of the business. |  |
| **stock_symbol** | **String** | Optional. The stock symbol (ticker) of the business. | [optional] |
| **business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. |  |
| **ip** | **String** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). | [optional] |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |
| **device_fingerprints** | [**Array&lt;DeviceFingerprintType&gt;**](DeviceFingerprintType.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). | [optional] |
| **banks** | **Array&lt;String&gt;** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org&#39;s default bank (visible via Org Settings in the Dashboard). | [optional] |
| **requested_products** | [**Array&lt;RequestedProductType&gt;**](RequestedProductType.md) | Optional. The product being applied for. Contact Unit to enable BillPay and Capital products. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateBusinessApplicationDataAttributes.new(
  name: Pied Piper,
  dba: null,
  address: null,
  phone: null,
  state_of_incorporation: DE,
  ein: 123456789,
  entity_type: Corporation,
  website: https://www.piedpiper.com,
  contact: null,
  officer: null,
  beneficial_owners: null,
  annual_revenue: null,
  number_of_employees: null,
  cash_flow: null,
  year_of_incorporation: 2014,
  countries_of_operation: [&quot;US&quot;,&quot;CA&quot;],
  stock_symbol: PPI,
  business_vertical: null,
  ip: 127.0.0.2,
  tags: {&quot;userId&quot;:&quot;2ab1f266-04b9-41fb-b728-cd1962bca52c&quot;},
  idempotency_key: 3a1a33be-4e12-4603-9ed0-820922389fb8,
  device_fingerprints: null,
  banks: null,
  requested_products: null
)
```

