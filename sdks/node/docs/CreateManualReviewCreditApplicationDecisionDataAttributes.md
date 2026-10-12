# CreateManualReviewCreditApplicationDecisionDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalApplicationId** | **string** | Identifier for client\&#39;s credit evaluation related to this decision. Max 200 char. | [default to undefined]
**submissionTimestamp** | **string** | Timestamp when the corresponding credit application was submitted. | [default to undefined]
**decisionTimestamp** | **string** | Timestamp when the credit decision was made. | [default to undefined]
**policyException** | **boolean** | One of true or false. | [default to undefined]
**policyExceptionReason** | **string** | Conditional if policyException is true. Brief description of reason for policy | [default to undefined]

## Example

```typescript
import { CreateManualReviewCreditApplicationDecisionDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateManualReviewCreditApplicationDecisionDataAttributes = {
    externalApplicationId,
    submissionTimestamp,
    decisionTimestamp,
    policyException,
    policyExceptionReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
