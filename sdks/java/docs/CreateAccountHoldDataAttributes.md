

# CreateAccountHoldDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **Integer** | The amount (in cents). Minimum is 1. |  |
|**idempotencyKey** | **String** | 1 to 255 characters. See Idempotency. |  |
|**expiredAt** | **LocalDate** | Optional. Date only (e.g. \&quot;2024-10-29\&quot;). The date the account hold will be automatically released at. |  [optional] |
|**description** | **String** | Optional. Description of the AccountHold (maximum of 80 characters). |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | Optional. See Tags. |  [optional] |



