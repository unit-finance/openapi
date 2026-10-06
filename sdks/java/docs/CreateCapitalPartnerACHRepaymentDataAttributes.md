

# CreateCapitalPartnerACHRepaymentDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**description** | **String** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. |  |
|**amount** | **Integer** | The amount to repay. |  |
|**addenda** | **String** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**sameDay** | **Boolean** | Optional, default is false. See Same Day ACH. |  [optional] |
|**secCode** | **String** | See Use a custom SEC Code. |  [optional] |
|**idempotencyKey** | **String** | See Idempotency. |  [optional] |



