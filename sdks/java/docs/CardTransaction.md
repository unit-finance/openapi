

# CardTransaction

A transaction that represents various card transactions that are not Purchase or ATM transactions. Most commonly, these transactions represent peer-to-peer payments (e.g. Venmo, CashApp) and gig economy employee payouts (ride sharing, deliveries, etc).

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**CardTransactionAttributes**](CardTransactionAttributes.md) |  |  |
|**relationships** | [**CardTransactionRelationships**](CardTransactionRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| CARD_TRANSACTION | &quot;cardTransaction&quot; |



