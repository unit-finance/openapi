

# CreateBookRepaymentDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**description** | **String** | Repayment description (maximum of 80 characters), this will show up on statement of the counterparty. |  |
|**amount** | **Integer** | The amount (cents) to repay. |  |
|**transactionSummaryOverride** | **String** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**idempotencyKey** | **String** | See Idempotency. |  [optional] |



