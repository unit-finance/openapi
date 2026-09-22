# ListCheckPayments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;CheckPayment&gt;**](CheckPayment.md) |  | [default to undefined]
**included** | [**Array&lt;DepositAccount&gt;**](DepositAccount.md) | Array of resources requested by the include query parameter. | [optional] [default to undefined]
**meta** | [**Meta**](Meta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ListCheckPayments200Response } from '@unit-finance/unit-node-sdk';

const instance: ListCheckPayments200Response = {
    data,
    included,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
