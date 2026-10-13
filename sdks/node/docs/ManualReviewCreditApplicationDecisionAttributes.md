# ManualReviewCreditApplicationDecisionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**externalApplicationId** | **string** | Identifier for client\&#39;s credit evaluation related to this decision. Max 200 char. | [default to undefined]
**evaluationType** | **string** | The type of credit decision. This is always CreditApplication. | [default to undefined]
**submissionTimestamp** | **string** | Timestamp when the corresponding credit application was submitted. | [default to undefined]
**decisionTimestamp** | **string** | Timestamp when the credit decision was made. | [default to undefined]
**decision** | **string** | The Decision for this credit application. This is always ManualReview. | [default to undefined]
**policyException** | **boolean** | One of true or false. | [default to undefined]
**policyExceptionReason** | **string** | Conditional if policyException is true. Brief description of reason for policy exception. Max 200 char. | [optional] [default to undefined]
**additionalUnderwritingData** | **{ [key: string]: any; }** | Object containing key-value pairs of underwriting data per credit policy. | [optional] [default to undefined]

## Example

```typescript
import { ManualReviewCreditApplicationDecisionAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: ManualReviewCreditApplicationDecisionAttributes = {
    createdAt,
    externalApplicationId,
    evaluationType,
    submissionTimestamp,
    decisionTimestamp,
    decision,
    policyException,
    policyExceptionReason,
    additionalUnderwritingData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
