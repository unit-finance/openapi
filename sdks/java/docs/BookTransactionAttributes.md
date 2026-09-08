

# BookTransactionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all transaction types. |  |
|**direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
|**amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
|**balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
|**summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
|**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other end of the transaction. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. Inherited from the payment tags (see Tag Inheritance). |  |



