# GetReceivedPayment200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListReceivedPayments200ResponseDataInner**](ListReceivedPayments200ResponseDataInner.md) |  | [default to undefined]
**included** | [**Array&lt;DepositAccount&gt;**](DepositAccount.md) | Array of resources requested by the include query parameter. | [optional] [default to undefined]

## Example

```typescript
import { GetReceivedPayment200Response } from '@unit-finance/unit-node-sdk';

const instance: GetReceivedPayment200Response = {
    data,
    included,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
