# ReleaseAccountHoldDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Minimum is 1. The amount (in cents) to release from the hold. The hold status will become PartiallyReleased, unless this equals the full remaining hold amount, in which case it becomes Released. | [default to undefined]
**idempotencyKey** | **string** | 1 to 255 characters. See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { ReleaseAccountHoldDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: ReleaseAccountHoldDataAttributes = {
    amount,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
