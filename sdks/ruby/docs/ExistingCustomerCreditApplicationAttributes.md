# UnitFinanceSdk::ExistingCustomerCreditApplicationAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **status** | **String** | The status of the credit application. One of Created, Pending, Approved, Denied, Canceled. |  |
| **aggregator_access_tokens** | **Array&lt;String&gt;** | Array of aggregator access tokens which are Plaid (or other account linking platform) integration tokens. See Plaid processor token | [optional] |
| **annual_income** | **Integer** | The annual income of the applicant. | [optional] |
| **number_of_employees** | [**NumberOfEmployeesType**](NumberOfEmployeesType.md) | Number of employees of the business. | [optional] |
| **years_in_business** | **Integer** | Number of years the business has been in operation. | [optional] |
| **additional_underwriting_data** | **Hash&lt;String, Object&gt;** | Object containing key-value pairs of underwriting data per credit policy. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ExistingCustomerCreditApplicationAttributes.new(
  created_at: null,
  status: null,
  aggregator_access_tokens: null,
  annual_income: null,
  number_of_employees: null,
  years_in_business: null,
  additional_underwriting_data: null
)
```

