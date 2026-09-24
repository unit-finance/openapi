# UnitFinanceSdk::CreateManualReviewCreditLimitDecisionDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **external_application_id** | **String** | Identifier for client&#39;s credit evaluation related to this decision. Max 200 char. |  |
| **submission_timestamp** | **Time** | Timestamp when the corresponding credit application was submitted. |  |
| **decision_timestamp** | **Time** | Timestamp when the credit decision was made. |  |
| **policy_exception** | **Boolean** | One of true or false. |  |
| **policy_exception_reason** | **String** | Conditional if policyException is true. Brief description of reason for policy exception. Max 200 char. |  |
| **additional_underwriting_data** | **Hash&lt;String, Object&gt;** | Object containing key-value pairs of underwriting data per credit policy. |  |
| **idempotency_key** | **String** | See Idempotency. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateManualReviewCreditLimitDecisionDataAttributes.new(
  external_application_id: A1234,
  submission_timestamp: 2023-09-19T09:10:09.206Z,
  decision_timestamp: 2023-09-19T09:10:09.206Z,
  policy_exception: true,
  policy_exception_reason: Executive approval,
  additional_underwriting_data: {&quot;someKey1&quot;:&quot;someValue1&quot;,&quot;someKey2&quot;:&quot;someValue2&quot;,&quot;someKey3&quot;:&quot;someValue3&quot;},
  idempotency_key: 3q1a3sbe-se12-4603-8ed0-820923389fb1
)
```

