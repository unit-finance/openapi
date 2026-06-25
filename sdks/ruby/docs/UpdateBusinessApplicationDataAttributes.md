# UnitFinanceSdk::UpdateBusinessApplicationDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. |  |
| **annual_revenue** | [**BusinessAnnualRevenue**](BusinessAnnualRevenue.md) | Optional. Annual revenue of the business. | [optional] |
| **number_of_employees** | [**BusinessNumberOfEmployees**](BusinessNumberOfEmployees.md) | Optional. Number of employees of the business. | [optional] |
| **cash_flow** | [**CashFlow**](CashFlow.md) | Optional. Cash flow of the business. | [optional] |
| **year_of_incorporation** | **String** | Optional. Year of incorporation of the business. | [optional] |
| **countries_of_operation** | **Array&lt;String&gt;** | Optional. An array of two letter codes representing the countries of operation of the business. | [optional] |
| **stock_symbol** | **String** | Optional. The stock symbol (ticker) of the business. | [optional] |
| **website** | **String** | Optional. A Valid website Url. | [optional] |
| **business_vertical** | [**BusinessVertical**](BusinessVertical.md) | Optional. The business vertical of the business. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdateBusinessApplicationDataAttributes.new(
  tags: {&quot;by&quot;:&quot;Richard Hendricks&quot;,&quot;id&quot;:&quot;23033b64-38f8-4dbc-91a1-313ff0156d02&quot;},
  annual_revenue: null,
  number_of_employees: null,
  cash_flow: null,
  year_of_incorporation: 2014,
  countries_of_operation: [&quot;US&quot;,&quot;CA&quot;],
  stock_symbol: PPI,
  website: null,
  business_vertical: null
)
```

