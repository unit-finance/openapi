

# RewardTransactionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all transaction types. |  |
|**direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
|**amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
|**balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
|**summary** | **String** | Summary of the transaction. Common to all transaction types, this will be the description of the reward. |  |
|**receiverCounterparty** | [**CounterpartyType**](CounterpartyType.md) | The receiving party of the transaction. Available only when the receiving party is a Deposit Account. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. Inherited from the payment tags (see Tag Inheritance). |  |



