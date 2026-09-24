# UnitFinanceSdk::DisputeAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **source** | **String** | One of DebitCard or ACH |  |
| **status** | **String** | One of InvestigationStarted, ProvisionallyCredited, Denied, ResolvedLost, ResolvedWon. |  |
| **status_history** | [**Array&lt;DisputeAttributesStatusHistoryInner&gt;**](DisputeAttributesStatusHistoryInner.md) | A dispute status list with the status date. Possible statuses are InvestigationStarted, ProvisionallyCredited, Denied, ResolvedLost, ResolvedWon. |  |
| **description** | **String** | Dispute description. |  |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. | [optional] |
| **amount** | **Integer** | The amount (cents) of the payment. |  |
| **decision_reason** | **String** | Reason for a ResolvedLost status. | [optional] |
| **dispute_type** | **String** | One of Issuer, Fraud, NonFraud. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::DisputeAttributes.new(
  source: null,
  status: null,
  status_history: null,
  description: null,
  created_at: null,
  updated_at: null,
  amount: null,
  decision_reason: null,
  dispute_type: null
)
```

