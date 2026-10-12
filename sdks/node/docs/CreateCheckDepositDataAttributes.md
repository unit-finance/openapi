# CreateCheckDepositDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The check amount (in cents) to deposit. | [default to undefined]
**description** | **string** | Description of the check deposit (maximum of 50 characters). | [default to undefined]
**clearingDaysOverride** | **number** | See Dynamic Clearing Period. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional, but **strongly recommended**. See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateCheckDepositDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateCheckDepositDataAttributes = {
    amount,
    description,
    clearingDaysOverride,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
