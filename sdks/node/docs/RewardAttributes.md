# RewardAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the reward was created. | [default to undefined]
**amount** | **number** | The amount (in cents) of the reward. | [default to undefined]
**description** | **string** | Description of the reward. | [default to undefined]
**status** | **string** | Either Sent or Rejected (see rejectReason for details). | [default to undefined]
**rejectReason** | **string** | More information about the status. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { RewardAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: RewardAttributes = {
    createdAt,
    amount,
    description,
    status,
    rejectReason,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
