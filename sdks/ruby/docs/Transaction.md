# UnitFinanceSdk::Transaction

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::Transaction.openapi_one_of
# =>
# [
#   :'ATMTransaction',
#   :'AccountLowBalanceClosureTransaction',
#   :'AdjustmentTransaction',
#   :'BookTransaction',
#   :'CardReversalTransaction',
#   :'CardTransaction',
#   :'CashDepositTransaction',
#   :'ChargebackTransaction',
#   :'CheckDepositTransaction',
#   :'CheckPaymentTransaction',
#   :'DishonoredACHTransaction',
#   :'DisputeTransaction',
#   :'FeeReversalTransaction',
#   :'FeeTransaction',
#   :'InterestShareTransaction',
#   :'InterestTransaction',
#   :'NegativeBalanceCoverageTransaction',
#   :'OriginatedACHTransaction',
#   :'PaymentAdvanceTransaction',
#   :'PaymentCanceledTransaction',
#   :'PurchaseTransaction',
#   :'PushToCardReversalTransaction',
#   :'PushToCardTransaction',
#   :'ReceivedACHTransaction',
#   :'ReleaseTransaction',
#   :'RepaidPaymentAdvanceTransaction',
#   :'ReturnedACHTransaction',
#   :'ReturnedCheckDepositTransaction',
#   :'ReturnedCheckPaymentTransaction',
#   :'ReturnedReceivedACHTransaction',
#   :'ReturnedWireTransaction',
#   :'RewardTransaction',
#   :'WireTransaction',
#   :'WriteOffTransaction'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::Transaction.openapi_discriminator_name
# => :'type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::Transaction.openapi_discriminator_mapping
# =>
# {
#   :'accountLowBalanceClosureTransaction' => :'AccountLowBalanceClosureTransaction',
#   :'adjustmentTransaction' => :'AdjustmentTransaction',
#   :'atmTransaction' => :'ATMTransaction',
#   :'bookTransaction' => :'BookTransaction',
#   :'cardReversalTransaction' => :'CardReversalTransaction',
#   :'cardTransaction' => :'CardTransaction',
#   :'cashDepositTransaction' => :'CashDepositTransaction',
#   :'chargebackTransaction' => :'ChargebackTransaction',
#   :'checkDepositTransaction' => :'CheckDepositTransaction',
#   :'checkPaymentTransaction' => :'CheckPaymentTransaction',
#   :'dishonoredAchTransaction' => :'DishonoredACHTransaction',
#   :'disputeTransaction' => :'DisputeTransaction',
#   :'feeReversalTransaction' => :'FeeReversalTransaction',
#   :'feeTransaction' => :'FeeTransaction',
#   :'interestShareTransaction' => :'InterestShareTransaction',
#   :'interestTransaction' => :'InterestTransaction',
#   :'negativeBalanceCoverageTransaction' => :'NegativeBalanceCoverageTransaction',
#   :'originatedAchTransaction' => :'OriginatedACHTransaction',
#   :'paymentAdvanceTransaction' => :'PaymentAdvanceTransaction',
#   :'paymentCanceledTransaction' => :'PaymentCanceledTransaction',
#   :'purchaseTransaction' => :'PurchaseTransaction',
#   :'pushToCardReversalTransaction' => :'PushToCardReversalTransaction',
#   :'pushToCardTransaction' => :'PushToCardTransaction',
#   :'receivedAchTransaction' => :'ReceivedACHTransaction',
#   :'releaseTransaction' => :'ReleaseTransaction',
#   :'repaidPaymentAdvanceTransaction' => :'RepaidPaymentAdvanceTransaction',
#   :'returnedAchTransaction' => :'ReturnedACHTransaction',
#   :'returnedCheckDepositTransaction' => :'ReturnedCheckDepositTransaction',
#   :'returnedCheckPaymentTransaction' => :'ReturnedCheckPaymentTransaction',
#   :'returnedReceivedAchTransaction' => :'ReturnedReceivedACHTransaction',
#   :'returnedWireTransaction' => :'ReturnedWireTransaction',
#   :'rewardTransaction' => :'RewardTransaction',
#   :'wireTransaction' => :'WireTransaction',
#   :'writeOffTransaction' => :'WriteOffTransaction'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::Transaction.build(data)
# => #<ATMTransaction:0x00007fdd4aab02a0>

UnitFinanceSdk::Transaction.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `ATMTransaction`
- `AccountLowBalanceClosureTransaction`
- `AdjustmentTransaction`
- `BookTransaction`
- `CardReversalTransaction`
- `CardTransaction`
- `CashDepositTransaction`
- `ChargebackTransaction`
- `CheckDepositTransaction`
- `CheckPaymentTransaction`
- `DishonoredACHTransaction`
- `DisputeTransaction`
- `FeeReversalTransaction`
- `FeeTransaction`
- `InterestShareTransaction`
- `InterestTransaction`
- `NegativeBalanceCoverageTransaction`
- `OriginatedACHTransaction`
- `PaymentAdvanceTransaction`
- `PaymentCanceledTransaction`
- `PurchaseTransaction`
- `PushToCardReversalTransaction`
- `PushToCardTransaction`
- `ReceivedACHTransaction`
- `ReleaseTransaction`
- `RepaidPaymentAdvanceTransaction`
- `ReturnedACHTransaction`
- `ReturnedCheckDepositTransaction`
- `ReturnedCheckPaymentTransaction`
- `ReturnedReceivedACHTransaction`
- `ReturnedWireTransaction`
- `RewardTransaction`
- `WireTransaction`
- `WriteOffTransaction`
- `nil` (if no type matches)

