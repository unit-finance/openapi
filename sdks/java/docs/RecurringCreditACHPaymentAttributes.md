

# RecurringCreditACHPaymentAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | The date the resource was updated. |  |
|**amount** | **Integer** | The amount (cents) of the payment. |  |
|**description** | **String** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. |  |
|**addenda** | **String** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. |  [optional] |
|**status** | **String** | Status of the recurring payment, one of: Active, Completed, Disabled, Deleted. |  |
|**numberOfPayments** | **Integer** | Represents the number of payments that were created by this recurring payment. |  |
|**schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |



