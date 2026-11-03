# UnitFinanceSdk::FreezeDepositAccountDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reason** | **String** | One of Fraud, ByBank, or Other. |  |
| **sub_reason** | **String** | Optional for Fraud and required for ByBank. For Fraud: AchActivity, CardActivity, AccountActivity, CheckActivity, WireActivity, HoldHarmlessReceived, LinkedToFraudulentCustomer. For ByBank: ProhibitedBusiness, MissingCddEdd, NonUsOperations, SuspectedFraud, Inactive, Unfunded, OngoingReevaluation, LegalRequestReceived, ErroneousPayment, Other. | [optional] |
| **reason_text** | **String** | Required when reason&#x3D;Other (1..255). Optional for Fraud and ByBank (max 255). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::FreezeDepositAccountDataAttributes.new(
  reason: Other,
  sub_reason: null,
  reason_text: Per request from customer
)
```

