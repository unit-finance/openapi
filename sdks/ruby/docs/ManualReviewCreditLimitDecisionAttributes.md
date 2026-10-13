# UnitFinanceSdk::ManualReviewCreditLimitDecisionAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **external_application_id** | **String** | Identifier for client&#39;s credit evaluation related to this decision. Max 200 char. |  |
| **evaluation_type** | **String** | The type of credit decision. This is always CreditLimit. |  |
| **submission_timestamp** | **Time** | Timestamp when the corresponding credit application was submitted. |  |
| **decision_timestamp** | **Time** | Timestamp when the credit decision was made. |  |
| **decision** | **String** | The Decision for this credit application. This is always ManualReview. |  |
| **policy_exception** | **Boolean** | One of true or false. |  |
| **policy_exception_reason** | **String** | Conditional if policyException is true. Brief description of reason for policy exception. Max 200 char. | [optional] |
| **additional_underwriting_data** | **Hash&lt;String, Object&gt;** | Object containing key-value pairs of underwriting data per credit policy. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ManualReviewCreditLimitDecisionAttributes.new(
  created_at: null,
  external_application_id: null,
  evaluation_type: null,
  submission_timestamp: null,
  decision_timestamp: null,
  decision: null,
  policy_exception: null,
  policy_exception_reason: null,
  additional_underwriting_data: null
)
```

