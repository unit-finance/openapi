# AccountHoldAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**status** | **string** | Status of the account hold: Active, PartiallyReleased or Released. | [default to undefined]
**amount** | **number** | The original amount (cents) of the account hold. | [default to undefined]
**remainingHoldAmount** | **number** | Optional. The remaining amount (cents) still being held. Only present when status is PartiallyReleased. | [optional] [default to undefined]
**releasedAt** | **string** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). The date the account hold was fully released. Only present when status is Released. | [optional] [default to undefined]
**expiredAt** | **string** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). The date the account hold will be automatically released at. | [optional] [default to undefined]
**description** | **string** | Optional. Account hold description (maximum of 80 characters). | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. | [optional] [default to undefined]

## Example

```typescript
import { AccountHoldAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: AccountHoldAttributes = {
    createdAt,
    status,
    amount,
    remainingHoldAmount,
    releasedAt,
    expiredAt,
    description,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
