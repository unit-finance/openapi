

# Transaction

A Transaction resource. One of the Unit transaction types, discriminated by the JSON:API type literal.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  |  |
|**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| ACCOUNT_LOW_BALANCE_CLOSURE_TRANSACTION | &quot;accountLowBalanceClosureTransaction&quot; |
| ADJUSTMENT_TRANSACTION | &quot;adjustmentTransaction&quot; |
| ATM_TRANSACTION | &quot;atmTransaction&quot; |
| BOOK_TRANSACTION | &quot;bookTransaction&quot; |
| CARD_REVERSAL_TRANSACTION | &quot;cardReversalTransaction&quot; |
| CARD_TRANSACTION | &quot;cardTransaction&quot; |
| CASH_DEPOSIT_TRANSACTION | &quot;cashDepositTransaction&quot; |
| CHARGEBACK_TRANSACTION | &quot;chargebackTransaction&quot; |
| CHECK_DEPOSIT_TRANSACTION | &quot;checkDepositTransaction&quot; |
| CHECK_PAYMENT_TRANSACTION | &quot;checkPaymentTransaction&quot; |
| DISHONORED_ACH_TRANSACTION | &quot;dishonoredAchTransaction&quot; |
| DISPUTE_TRANSACTION | &quot;disputeTransaction&quot; |
| FEE_REVERSAL_TRANSACTION | &quot;feeReversalTransaction&quot; |
| FEE_TRANSACTION | &quot;feeTransaction&quot; |
| INTEREST_SHARE_TRANSACTION | &quot;interestShareTransaction&quot; |
| INTEREST_TRANSACTION | &quot;interestTransaction&quot; |
| NEGATIVE_BALANCE_COVERAGE_TRANSACTION | &quot;negativeBalanceCoverageTransaction&quot; |
| ORIGINATED_ACH_TRANSACTION | &quot;originatedAchTransaction&quot; |
| PAYMENT_ADVANCE_TRANSACTION | &quot;paymentAdvanceTransaction&quot; |
| PAYMENT_CANCELED_TRANSACTION | &quot;paymentCanceledTransaction&quot; |
| PURCHASE_TRANSACTION | &quot;purchaseTransaction&quot; |
| PUSH_TO_CARD_REVERSAL_TRANSACTION | &quot;pushToCardReversalTransaction&quot; |
| PUSH_TO_CARD_TRANSACTION | &quot;pushToCardTransaction&quot; |
| RECEIVED_ACH_TRANSACTION | &quot;receivedAchTransaction&quot; |
| RELEASE_TRANSACTION | &quot;releaseTransaction&quot; |
| REPAID_PAYMENT_ADVANCE_TRANSACTION | &quot;repaidPaymentAdvanceTransaction&quot; |
| RETURNED_ACH_TRANSACTION | &quot;returnedAchTransaction&quot; |
| RETURNED_CHECK_DEPOSIT_TRANSACTION | &quot;returnedCheckDepositTransaction&quot; |
| RETURNED_CHECK_PAYMENT_TRANSACTION | &quot;returnedCheckPaymentTransaction&quot; |
| RETURNED_RECEIVED_ACH_TRANSACTION | &quot;returnedReceivedAchTransaction&quot; |
| RETURNED_WIRE_TRANSACTION | &quot;returnedWireTransaction&quot; |
| REWARD_TRANSACTION | &quot;rewardTransaction&quot; |
| WIRE_TRANSACTION | &quot;wireTransaction&quot; |
| WRITE_OFF_TRANSACTION | &quot;writeOffTransaction&quot; |



