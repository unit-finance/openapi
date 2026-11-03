

# AccountHoldAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**status** | **String** | Status of the account hold: Active, PartiallyReleased or Released. |  |
|**amount** | **Integer** | The original amount (cents) of the account hold. |  |
|**remainingHoldAmount** | **Integer** | Optional. The remaining amount (cents) still being held. Only present when status is PartiallyReleased. |  [optional] |
|**releasedAt** | **LocalDate** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). The date the account hold was fully released. Only present when status is Released. |  [optional] |
|**expiredAt** | **LocalDate** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). The date the account hold will be automatically released at. |  [optional] |
|**description** | **String** | Optional. Account hold description (maximum of 80 characters). |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | Optional. See Tags. |  [optional] |



