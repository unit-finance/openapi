

# OriginatedACHTransactionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all transaction types. |  |
|**direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
|**amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
|**balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
|**summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
|**description** | **String** | Transaction description. |  |
|**addenda** | **String** | Optional, additional transaction description. |  |
|**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other end of the transaction. |  |
|**secCode** | **String** | The 3-letter ACH Standard Entry Class (SEC) Code. One of WEB, CCD, PPD. |  |
|**traceNumber** | **String** | The 15-digit ACH Trace Number identifies the transaction within the ACH file after transmission. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. Inherited from the payment tags (see Tag Inheritance). |  |



