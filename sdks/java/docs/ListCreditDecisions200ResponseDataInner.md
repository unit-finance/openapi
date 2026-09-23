

# ListCreditDecisions200ResponseDataInner


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**ManualReviewCreditApplicationDecisionAttributes**](ManualReviewCreditApplicationDecisionAttributes.md) |  |  |
|**relationships** | [**DeniedCreditApplicationDecisionRelationships**](DeniedCreditApplicationDecisionRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| APPROVED_CREDIT_LIMIT_DECISION | &quot;approvedCreditLimitDecision&quot; |
| DENIED_CREDIT_LIMIT_DECISION | &quot;deniedCreditLimitDecision&quot; |
| MANUAL_REVIEW_CREDIT_LIMIT_DECISION | &quot;manualReviewCreditLimitDecision&quot; |
| DENIED_CREDIT_APPLICATION_DECISION | &quot;deniedCreditApplicationDecision&quot; |
| MANUAL_REVIEW_CREDIT_APPLICATION_DECISION | &quot;manualReviewCreditApplicationDecision&quot; |



