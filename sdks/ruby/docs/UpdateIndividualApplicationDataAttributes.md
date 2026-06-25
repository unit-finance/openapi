# UnitFinanceSdk::UpdateIndividualApplicationDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. |  |
| **occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the individual. | [optional] |
| **annual_income** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the individual. | [optional] |
| **source_of_income** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the individual. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdateIndividualApplicationDataAttributes.new(
  tags: {&quot;by&quot;:&quot;Richard Hendricks&quot;,&quot;id&quot;:&quot;23033b64-38f8-4dbc-91a1-313ff0156d02&quot;},
  occupation: null,
  annual_income: null,
  source_of_income: null
)
```

