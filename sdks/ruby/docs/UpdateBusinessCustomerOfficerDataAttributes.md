# UnitFinanceSdk::UpdateBusinessCustomerOfficerDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **title** | **String** | Title of the officer. One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. | [optional] |
| **occupation** | [**OccupationType**](OccupationType.md) | Occupation of the officer. | [optional] |
| **annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Annual income of the officer. | [optional] |
| **source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Source of income of the officer. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::UpdateBusinessCustomerOfficerDataAttributes.new(
  title: CEO,
  occupation: null,
  annual_income: null,
  source_of_income: null
)
```

