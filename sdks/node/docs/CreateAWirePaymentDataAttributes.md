# CreateAWirePaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents). | [default to undefined]
**description** | **string** | Payment description (maximum of 50 characters), this will show up on statement of the counterparty. | [default to undefined]
**counterparty** | [**WireCounterpartyType**](WireCounterpartyType.md) | The party on the other side of the Wire payment. | [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] [default to undefined]

## Example

```typescript
import { CreateAWirePaymentDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CreateAWirePaymentDataAttributes = {
    amount,
    description,
    counterparty,
    idempotencyKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
