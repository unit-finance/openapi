

# ReturnedWireTransactionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all transaction types. |  |
|**direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
|**amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
|**balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
|**summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
|**reason** | **String** | The reason for the return. |  |
|**imad** | **String** | Input Message Accountability Data. It&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. |  |
|**omad** | **String** | Output Message Accountability Data. It&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |



