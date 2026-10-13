# ListTransactions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;Transaction&gt;**](Transaction.md) | Array of transaction resources. | [default to undefined]
**included** | [**Array&lt;ListTransactions200ResponseIncludedInner&gt;**](ListTransactions200ResponseIncludedInner.md) | Array of resources requested by the include query parameter. | [optional] [default to undefined]
**meta** | [**Meta**](Meta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ListTransactions200Response } from '@unit-finance/unit-openapi-node-sdk';

const instance: ListTransactions200Response = {
    data,
    included,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
