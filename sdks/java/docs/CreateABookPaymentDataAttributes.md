

# CreateABookPaymentDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **Integer** | The amount (in cents). |  |
|**description** | **String** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. |  |
|**transactionSummaryOverride** | **String** | Optional. If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). |  [optional] |
|**idempotencyKey** | **String** | Optional. See Idempotency. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). |  [optional] |



