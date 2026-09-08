

# DisputeTransactionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all transaction types. |  |
|**direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
|**amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
|**balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
|**disputeId** | **String** | Unique ID of the dispute that is related to the transaction. |  |
|**summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
|**reason** | **String** | The reason for the dispute transaction, one of: ProvisionalCredit, ProvisionalCreditReversalDenied, ProvisionalCreditReversalResolved, FinalCredit. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |



