

# BookPaymentAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**status** | **String** | Either Sent or Rejected (see reason for details). |  |
|**reason** | **String** | Optional. More information about the status. |  [optional] |
|**direction** | **String** | The direction in which the funds flow (either Debit or Credit). |  |
|**description** | **String** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. |  |
|**transactionSummaryOverride** | **String** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). |  [optional] |
|**amount** | **Integer** | The amount (cents) of the payment. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |



