# CreateDepositAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depositProduct** | **string** | The name of the deposit product. | [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]
**overdraftLimit** | **number** | Optional. Overdraft limit in cents. Must be 0 or greater. | [optional] [default to undefined]

## Example

```typescript
import { CreateDepositAccountDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CreateDepositAccountDataAttributes = {
    depositProduct,
    tags,
    idempotencyKey,
    overdraftLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
