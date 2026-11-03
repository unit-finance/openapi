

# ReleaseAccountHoldDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **Integer** | Minimum is 1. The amount (in cents) to release from the hold. The hold status will become PartiallyReleased, unless this equals the full remaining hold amount, in which case it becomes Released. |  |
|**idempotencyKey** | **String** | 1 to 255 characters. See Idempotency. |  [optional] |



