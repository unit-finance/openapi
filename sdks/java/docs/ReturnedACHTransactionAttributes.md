

# ReturnedACHTransactionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all transaction types. |  |
|**direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
|**amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
|**balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
|**summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
|**companyName** | **String** | The name by which the originator is known to the receiver. |  |
|**counterpartyName** | **String** | The name of the party that originated the ACH payment. |  |
|**counterpartyRoutingNumber** | **String** | The routing number of the party that originated the ACH payment. |  |
|**reason** | **String** | The reason for the transaction return. See ACH return reasons. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |



