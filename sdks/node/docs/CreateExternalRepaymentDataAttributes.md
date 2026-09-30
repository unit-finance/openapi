# CreateExternalRepaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Repayment description (maximum of 80 characters). | [default to undefined]
**amount** | **number** | The amount (cents) to repay. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateExternalRepaymentDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateExternalRepaymentDataAttributes = {
    description,
    amount,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
