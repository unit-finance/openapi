# UnitFinanceSdk::UpdateBusinessOfficerDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **officer_occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the officer. | [optional] |
| **officer_annual_income** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the officer. | [optional] |
| **officer_source_of_income** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the officer. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdateBusinessOfficerDataAttributes.new(
  officer_occupation: null,
  officer_annual_income: null,
  officer_source_of_income: null
)
```

