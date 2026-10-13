# CreateAccountHoldDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents). | [default to undefined]
**expiredAt** | **string** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). the date the account hold will be automatically released at. | [optional] [default to undefined]
**description** | **string** | Description of the AccountHold (maximum of 80 characters). | [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateAccountHoldDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CreateAccountHoldDataAttributes = {
    amount,
    expiredAt,
    description,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
