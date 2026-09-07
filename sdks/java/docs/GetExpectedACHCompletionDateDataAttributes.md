

# GetExpectedACHCompletionDateDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**direction** | **String** | The direction of the ACH payment. One of Credit or Debit. |  |
|**amount** | **Integer** | The payment amount (in cents). Must be &gt;&#x3D; 1. |  |
|**sameDay** | **Boolean** | Optional, default is false. Whether same-day ACH processing is requested. See Same Day ACH. |  [optional] |
|**submissionAt** | **OffsetDateTime** | Optional, defaults to the current time. Hypothetical submission time used for the estimate. |  [optional] |



