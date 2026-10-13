# UnitFinanceSdk::CreateManualReviewCreditApplicationDecisionDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **external_application_id** | **String** | Identifier for client&#39;s credit evaluation related to this decision. Max 200 char. |  |
| **submission_timestamp** | **Time** | Timestamp when the corresponding credit application was submitted. |  |
| **decision_timestamp** | **Time** | Timestamp when the credit decision was made. |  |
| **policy_exception** | **Boolean** | One of true or false. |  |
| **policy_exception_reason** | **String** | Conditional if policyException is true. Brief description of reason for policy |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateManualReviewCreditApplicationDecisionDataAttributes.new(
  external_application_id: A1234,
  submission_timestamp: 2023-09-19T09:10:09.206Z,
  decision_timestamp: 2023-09-19T09:10:09.206Z,
  policy_exception: false,
  policy_exception_reason: null
)
```

