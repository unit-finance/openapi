

# RecurringBookRepaymentAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | The date the resource was updated. |  [optional] |
|**schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. |  |
|**description** | **String** | Repayment description (maximum of 80 characters). this will show up on the statement of the counterparty. |  |
|**transactionSummaryOverride** | **String** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). |  [optional] |
|**numberOfRepayments** | **Integer** | Represents the number of repayments that were created by this recurring payment. |  |
|**status** | **String** | Status of the recurring repayment, one of: Active, Disabled. |  |



