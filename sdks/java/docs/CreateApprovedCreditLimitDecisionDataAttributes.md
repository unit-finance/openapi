

# CreateApprovedCreditLimitDecisionDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**externalApplicationId** | **String** | Identifier for client&#39;s credit evaluation related to this decision. Max 200 char. |  |
|**submissionTimestamp** | **OffsetDateTime** | Timestamp when the corresponding credit application was submitted. |  |
|**decisionTimestamp** | **OffsetDateTime** | Timestamp when the credit decision was made. |  |
|**creditLimit** | **Integer** | Credit limit for application as evaluated per policy. In cents. |  |
|**policyException** | **Boolean** | One of true or false. |  |
|**policyExceptionReason** | **String** | Conditional if policyException is true. Brief description of reason for policy exception. Max 200 char. |  |
|**additionalUnderwritingData** | **Map&lt;String, Object&gt;** | Object containing key-value pairs of underwriting data per credit policy. |  |
|**idempotencyKey** | **String** | See Idempotency. |  [optional] |



