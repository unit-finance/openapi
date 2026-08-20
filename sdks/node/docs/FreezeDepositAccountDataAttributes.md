# FreezeDepositAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **string** | The reason for freezing the account. Either Fraud or Other, with a specified reasonText. | [default to undefined]
**reasonText** | **string** | Optional. The free-text reason for freezing the account (up to 255 characters) when Other is specified. | [optional] [default to undefined]

## Example

```typescript
import { FreezeDepositAccountDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: FreezeDepositAccountDataAttributes = {
    reason,
    reasonText,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
