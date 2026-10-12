# FreezeWalletDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **string** | The reason for freezing the wallet. Either Fraud or Other, with a specified reasonText. | [default to undefined]
**reasonText** | **string** | Optional. The free-text reason for freezing the wallet (up to 255 characters) when Other is specified. | [optional] [default to undefined]

## Example

```typescript
import { FreezeWalletDataAttributes } from 'unit-openapi-node-sdk';

const instance: FreezeWalletDataAttributes = {
    reason,
    reasonText,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
