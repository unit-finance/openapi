

# ReceivableAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | The date the resource was updated. |  |
|**totalPrincipal** | **ReceivableAttributesTotalPrincipal** |  |  |
|**remainingPrincipal** | **Integer** | The remaining principal of the receivable that needs to be repaid. |  |
|**totalInterest** | **ReceivableAttributesTotalInterest** |  |  |
|**remainingInterest** | **Integer** | The remaining interest of the receivable that needs to be repaid. |  |
|**plan** | **String** | The plan the receivable belongs to, e.g. Purchase or Fee. |  |
|**repaymentStatus** | **ReceivableAttributesRepaymentStatus** |  |  |
|**purchaseDueDate** | **LocalDate** | The date the receivable is due e.g. 2024-12-31. |  [optional] |
|**purchasedTimestamp** | **OffsetDateTime** | The date the receivable was purchased |  [optional] |
|**capitalPartnerId** | **String** | The capital partner id |  [optional] |



