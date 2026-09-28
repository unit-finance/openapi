

# CancelPositivePay200ResponseData

The cancelled Positive Pay rule.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**WireDrawdownPositivePayAttributes**](WireDrawdownPositivePayAttributes.md) |  |  |
|**relationships** | [**FeeRelationships**](FeeRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| RECEIVED_ACH_DEBIT_POSITIVE_PAY | &quot;receivedAchDebitPositivePay&quot; |
| CHECK_PAYMENT_POSITIVE_PAY | &quot;checkPaymentPositivePay&quot; |
| DRAWDOWN_POSITIVE_PAY | &quot;drawdownPositivePay&quot; |



