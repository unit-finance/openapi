# CreateAccountHoldDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents). Minimum is 1. | [default to undefined]
**idempotencyKey** | **string** | 1 to 255 characters. See Idempotency. | [default to undefined]
**expiredAt** | **string** | Optional. Date only (e.g. \&quot;2024-10-29\&quot;). The date the account hold will be automatically released at. | [optional] [default to undefined]
**description** | **string** | Optional. Description of the AccountHold (maximum of 80 characters). | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. | [optional] [default to undefined]

## Example

```typescript
import { CreateAccountHoldDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CreateAccountHoldDataAttributes = {
    amount,
    idempotencyKey,
    expiredAt,
    description,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
