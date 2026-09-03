

# ListRecurringPayments200ResponseDataInner


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**RecurringCreditACHPaymentAttributes**](RecurringCreditACHPaymentAttributes.md) |  |  |
|**relationships** | [**RecurringCreditACHPaymentRelationships**](RecurringCreditACHPaymentRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| RECURRING_CREDIT_ACH_PAYMENT | &quot;recurringCreditAchPayment&quot; |
| RECURRING_CREDIT_BOOK_PAYMENT | &quot;recurringCreditBookPayment&quot; |
| RECURRING_DEBIT_ACH_PAYMENT | &quot;recurringDebitAchPayment&quot; |



