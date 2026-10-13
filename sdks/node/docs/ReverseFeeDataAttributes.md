# ReverseFeeDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Description of the fee (maximum of 50 characters). | [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional, but **strongly recommended**. See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { ReverseFeeDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: ReverseFeeDataAttributes = {
    description,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
