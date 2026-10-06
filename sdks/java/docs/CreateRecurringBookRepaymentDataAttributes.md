

# CreateRecurringBookRepaymentDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**description** | **String** | Repayment description (maximum of 80 characters), this will show up on the statement of the counterparty. |  |
|**transactionSummaryOverride** | **String** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). |  [optional] |
|**idempotencyKey** | **String** | See Idempotency. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this recurring repayment creates (see Tag Inheritance). |  [optional] |



