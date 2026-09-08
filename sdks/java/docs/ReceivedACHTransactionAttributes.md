

# ReceivedACHTransactionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all transaction types. |  |
|**direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
|**amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
|**balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
|**summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
|**description** | **String** | Transaction description. |  |
|**addenda** | **String** | Additional transaction description (maximum of 50 characters). |  [optional] |
|**companyName** | **String** | The name by which the originator is known to the receiver. |  |
|**counterpartyRoutingNumber** | **String** | The routing number of the party that originated the ACH payment. |  |
|**traceNumber** | **String** | The ACH Trace Number. |  |
|**secCode** | **String** | The 3-letter ACH Standard Entry Class (SEC) Code (e.g. WEB, CCD, PPD, etc.). |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |



