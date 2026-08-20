

# RecurringCreditBookPaymentAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | The date the resource was updated. |  |
|**amount** | **Integer** | The amount (cents) of the payment. |  |
|**description** | **String** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. |  |
|**status** | **String** | Status of the recurring payment, one of: Active, Completed, Disabled, Deleted. |  |
|**numberOfPayments** | **Integer** | Represents the number of payments that were created by this recurring payment. |  |
|**schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. |  |
|**transactionSummaryOverride** | **String** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |



