

# CreateRecurringACHRepaymentDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**description** | **String** | Repayment description (maximum of 50 characters). This will show up on the statement of the counterparty. |  |
|**addenda** | **String** | Optional, additional repayment description (maximum of 80 characters), not all institutions present that in payment description. |  [optional] |
|**sameDay** | **Boolean** | Optional, default is false. See Same Day ACH. |  [optional] |
|**secCode** | **String** | See Use a custom SEC Code. |  [optional] |
|**idempotencyKey** | **String** | See Idempotency. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this recurring repayment creates (see Tag Inheritance). |  [optional] |



