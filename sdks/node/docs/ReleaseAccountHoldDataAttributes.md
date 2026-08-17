# ReleaseAccountHoldDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents) to release from the hold. The hold status will become PartiallyReleased. | [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { ReleaseAccountHoldDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: ReleaseAccountHoldDataAttributes = {
    amount,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
