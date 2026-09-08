

# ATMTransactionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all transaction types. |  |
|**direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
|**amount** | **Integer** | The amount (cents) of the transaction, including the surcharge fee. Common to all transaction types. |  |
|**balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
|**summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
|**cardLast4Digits** | **String** | The last 4 digits of the debit card involved in the transaction. |  |
|**atmName** | **String** | The name of the ATM. |  |
|**atmLocation** | **String** | The location (city, state, etc.) of the ATM. |  [optional] |
|**surcharge** | **BigDecimal** | The surcharge fee (cents) for the transaction. |  |
|**interchange** | **String** | The interchange share for this transaction. Calculated at the end of each day, see the transaction.updated event. |  [optional] |
|**grossInterchange** | **String** | The gross interchange share for this transaction. |  [optional] |
|**cardNetwork** | **String** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |
|**currencyConversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. |  [optional] |
|**cardDecisionSource** | **String** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. |  [optional] |



