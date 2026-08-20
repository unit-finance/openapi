# GetExpectedACHCompletionDateDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **string** | The direction of the ACH payment. One of Credit or Debit. | [default to undefined]
**amount** | **number** | The payment amount (in cents). Must be &gt;&#x3D; 1. | [default to undefined]
**sameDay** | **boolean** | Optional, default is false. Whether same-day ACH processing is requested. See Same Day ACH. | [optional] [default to undefined]
**submissionAt** | **string** | Optional, defaults to the current time. Hypothetical submission time used for the estimate. | [optional] [default to undefined]

## Example

```typescript
import { GetExpectedACHCompletionDateDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: GetExpectedACHCompletionDateDataAttributes = {
    direction,
    amount,
    sameDay,
    submissionAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
