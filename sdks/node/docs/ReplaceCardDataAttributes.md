# ReplaceCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingAddress** | [**AddressType**](AddressType.md) | Temporary address to ship the replacement card to. If not specified, the address provided during card creation is reused. This will now effect the default shippingAddress. | [optional] [default to undefined]

## Example

```typescript
import { ReplaceCardDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: ReplaceCardDataAttributes = {
    shippingAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
