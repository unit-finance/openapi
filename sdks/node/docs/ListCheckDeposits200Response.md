# ListCheckDeposits200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;CheckDeposit&gt;**](CheckDeposit.md) |  | [default to undefined]
**included** | [**Array&lt;DepositAccount&gt;**](DepositAccount.md) | Array of resources requested by the include query parameter. | [optional] [default to undefined]
**meta** | [**Meta**](Meta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ListCheckDeposits200Response } from '@unit-finance/unit-openapi-node-sdk';

const instance: ListCheckDeposits200Response = {
    data,
    included,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
