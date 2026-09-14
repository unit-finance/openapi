# UnitFinanceSdk::UpdateBusinessCustomerDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **address** | [**AddressType**](AddressType.md) | Address of the business. To modify specify the new address. | [optional] |
| **phone** | [**PhoneType**](PhoneType.md) | Phone of the business. To modify specify the new phone number. | [optional] |
| **contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. | [optional] |
| **authorized_users** | [**Array&lt;AuthorizedUserType&gt;**](AuthorizedUserType.md) | Array of authorized users. The provided array items will replace the existing ones. | [optional] |
| **dba** | **String** | To modify or add specify the new dba name. | [optional] |
| **business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. | [optional] |
| **number_of_employees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Number of employees of the business. | [optional] |
| **annual_revenue** | [**AnnualRevenueType**](AnnualRevenueType.md) | Annual revenue of the business. | [optional] |
| **cash_flow** | [**CashFlowType**](CashFlowType.md) | Cash flow of the business. | [optional] |
| **countries_of_operation** | **Array&lt;String&gt;** | Countries where the business operates. | [optional] |
| **website** | **String** | Business&#39;s website. | [optional] |
| **stock_symbol** | **String** | Stock symbol (ticker) of the business. | [optional] |
| **year_of_incorporation** | **String** | Year of incorporation of the business. | [optional] |
| **operating_address** | [**AddressType**](AddressType.md) | The operating address of the business. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdateBusinessCustomerDataAttributes.new(
  address: null,
  phone: null,
  contact: null,
  authorized_users: null,
  dba: null,
  business_vertical: null,
  number_of_employees: null,
  annual_revenue: null,
  cash_flow: null,
  countries_of_operation: [&quot;US&quot;,&quot;CA&quot;],
  website: https://piedpiper.com,
  stock_symbol: PPI,
  year_of_incorporation: 2014,
  operating_address: null,
  tags: null
)
```

