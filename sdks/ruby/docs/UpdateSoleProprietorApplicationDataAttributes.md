# UnitFinanceSdk::UpdateSoleProprietorApplicationDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. |  |
| **annual_revenue** | [**SoleProprietorAnnualRevenueType**](SoleProprietorAnnualRevenueType.md) | Optional. Specify the annual revenue here. | [optional] |
| **number_of_employees** | [**SoleProprietorNumberOfEmployeesType**](SoleProprietorNumberOfEmployeesType.md) | Optional. Specify the number of employees here. | [optional] |
| **business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | Optional. Specify the business vertical here. | [optional] |
| **website** | **String** | Optional. Specify the business website here. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::UpdateSoleProprietorApplicationDataAttributes.new(
  tags: {&quot;by&quot;:&quot;Richard Hendricks&quot;,&quot;id&quot;:&quot;23033b64-38f8-4dbc-91a1-313ff0156d02&quot;},
  annual_revenue: null,
  number_of_employees: null,
  business_vertical: null,
  website: https://unit.co
)
```

