# UnitFinanceSdk::CreateOnboardingCreditApplicationDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **aggregator_access_tokens** | **Array&lt;String&gt;** | Array of aggregator access tokens which are Plaid (or other account linking platform) integration tokens. See Plaid processor token | [optional] |
| **annual_income** | **Integer** | The annual income of the applicant. | [optional] |
| **number_of_employees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Number of employees of the business. | [optional] |
| **years_in_business** | **Integer** | Number of years the business has been in operation. | [optional] |
| **additional_underwriting_data** | **Hash&lt;String, Object&gt;** | Object containing key-value pairs of underwriting data per credit policy. | [optional] |
| **idempotency_key** | **String** | See Idempotency. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateOnboardingCreditApplicationDataAttributes.new(
  aggregator_access_tokens: null,
  annual_income: null,
  number_of_employees: null,
  years_in_business: null,
  additional_underwriting_data: null,
  idempotency_key: null
)
```

