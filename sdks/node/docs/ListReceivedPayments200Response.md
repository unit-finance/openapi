# ListReceivedPayments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;ListReceivedPayments200ResponseDataInner&gt;**](ListReceivedPayments200ResponseDataInner.md) |  | [default to undefined]
**included** | [**Array&lt;DepositAccount&gt;**](DepositAccount.md) | Array of resources requested by the include query parameter. | [optional] [default to undefined]
**meta** | [**Meta**](Meta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ListReceivedPayments200Response } from '@unit-finance/unit-openapi-node-sdk';

const instance: ListReceivedPayments200Response = {
    data,
    included,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
