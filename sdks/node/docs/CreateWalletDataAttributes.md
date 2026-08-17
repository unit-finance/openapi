# CreateWalletDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletTerms** | **string** | The name of the wallet terms. | [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateWalletDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateWalletDataAttributes = {
    walletTerms,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
