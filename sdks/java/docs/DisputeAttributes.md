

# DisputeAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**source** | **String** | One of DebitCard or ACH |  |
|**status** | **String** | One of InvestigationStarted, ProvisionallyCredited, Denied, ResolvedLost, ResolvedWon. |  |
|**statusHistory** | [**List&lt;DisputeAttributesStatusHistoryInner&gt;**](DisputeAttributesStatusHistoryInner.md) | A dispute status list with the status date. Possible statuses are InvestigationStarted, ProvisionallyCredited, Denied, ResolvedLost, ResolvedWon. |  |
|**description** | **String** | Dispute description. |  |
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | The date the resource was updated. |  [optional] |
|**amount** | **Integer** | The amount (cents) of the payment. |  |
|**decisionReason** | **String** | Reason for a ResolvedLost status. |  [optional] |
|**disputeType** | **String** | One of Issuer, Fraud, NonFraud. |  [optional] |



