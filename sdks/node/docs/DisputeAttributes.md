# DisputeAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **string** | One of DebitCard or ACH | [default to undefined]
**status** | **string** | One of InvestigationStarted, ProvisionallyCredited, Denied, ResolvedLost, ResolvedWon. | [default to undefined]
**statusHistory** | [**Array&lt;DisputeAttributesStatusHistoryInner&gt;**](DisputeAttributesStatusHistoryInner.md) | A dispute status list with the status date. Possible statuses are InvestigationStarted, ProvisionallyCredited, Denied, ResolvedLost, ResolvedWon. | [default to undefined]
**description** | **string** | Dispute description. | [default to undefined]
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [optional] [default to undefined]
**amount** | **number** | The amount (cents) of the payment. | [default to undefined]
**decisionReason** | **string** | Reason for a ResolvedLost status. | [optional] [default to undefined]
**disputeType** | **string** | One of Issuer, Fraud, NonFraud. | [optional] [default to undefined]

## Example

```typescript
import { DisputeAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: DisputeAttributes = {
    source,
    status,
    statusHistory,
    description,
    createdAt,
    updatedAt,
    amount,
    decisionReason,
    disputeType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
