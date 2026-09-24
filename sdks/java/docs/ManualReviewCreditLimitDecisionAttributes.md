

# ManualReviewCreditLimitDecisionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**externalApplicationId** | **String** | Identifier for client&#39;s credit evaluation related to this decision. Max 200 char. |  |
|**evaluationType** | **String** | The type of credit decision. This is always CreditLimit. |  |
|**submissionTimestamp** | **OffsetDateTime** | Timestamp when the corresponding credit application was submitted. |  |
|**decisionTimestamp** | **OffsetDateTime** | Timestamp when the credit decision was made. |  |
|**decision** | **String** | The Decision for this credit application. This is always ManualReview. |  |
|**policyException** | **Boolean** | One of true or false. |  |
|**policyExceptionReason** | **String** | Conditional if policyException is true. Brief description of reason for policy exception. Max 200 char. |  [optional] |
|**additionalUnderwritingData** | **Map&lt;String, Object&gt;** | Object containing key-value pairs of underwriting data per credit policy. |  [optional] |



