# UnitFinanceSdk::UpdateBusinessBeneficialOwnerDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the beneficial owner. | [optional] |
| **annual_income** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the beneficial owner. | [optional] |
| **source_of_income** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the beneficial owner. | [optional] |
| **percentage** | **String** | Optional. The beneficial owner percentage of ownership at the business (between 25 and 100). | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdateBusinessBeneficialOwnerDataAttributes.new(
  occupation: null,
  annual_income: null,
  source_of_income: null,
  percentage: null
)
```

