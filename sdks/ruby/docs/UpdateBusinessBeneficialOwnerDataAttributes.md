# UnitFinanceSdk::UpdateBusinessBeneficialOwnerDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the beneficial owner. | [optional] |
| **annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the beneficial owner. | [optional] |
| **source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the beneficial owner. | [optional] |
| **percentage** | **String** | Optional. The beneficial owner percentage of ownership at the business (between 25 and 100). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::UpdateBusinessBeneficialOwnerDataAttributes.new(
  occupation: null,
  annual_income: null,
  source_of_income: null,
  percentage: null
)
```

