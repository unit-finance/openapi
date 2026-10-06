

# RewardAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the reward was created. |  |
|**amount** | **Integer** | The amount (in cents) of the reward. |  |
|**description** | **String** | Description of the reward. |  |
|**status** | **String** | Either Sent or Rejected (see rejectReason for details). |  |
|**rejectReason** | **String** | More information about the status. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |



