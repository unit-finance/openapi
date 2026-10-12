# CreateRewardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents) to reward the account. | [default to undefined]
**description** | **string** | Description of the reward (maximum of 50 characters). | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional, but **strongly recommended**. See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateRewardDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateRewardDataAttributes = {
    amount,
    description,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
