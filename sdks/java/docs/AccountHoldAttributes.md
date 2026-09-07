

# AccountHoldAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**status** | **String** | Status of the account hold, either Active, Released, PartiallyReleased. |  |
|**amount** | **Integer** | The amount (cents) of the payment. |  |
|**remainingHoldAmount** | **Integer** | Optional. The remaining amount (cents) being held. Only present when status is PartiallyReleased. |  [optional] |
|**expiredAt** | **LocalDate** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). the date the account hold will be automatically released at. |  [optional] |
|**description** | **String** | Account hold description (maximum of 80 characters). |  |
|**tags** | **Map&lt;String, Object&gt;** | Optional. See Tags. |  [optional] |



