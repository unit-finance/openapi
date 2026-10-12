# CreateBatchReleasesDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents) to move from the batch account to the receiver account. | [default to undefined]
**description** | **string** | Description of the payment (maximum of 50 characters). | [default to undefined]
**senderName** | **string** | Sender name for the payment (maximum of 255 characters). | [default to undefined]
**senderAddress** | [**AddressType**](AddressType.md) | Sender address for the payment. | [default to undefined]
**senderAccountNumber** | **string** | A unique identifier for the sender of the payment (maximum of 17 characters). As an example, when the payment comes from a card processor, this identifier may be set to the BIN followed by the last four digits of the card used. | [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. Tags will be passed to the related Release Transaction. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional, but strongly recommended. See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateBatchReleasesDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateBatchReleasesDataAttributes = {
    amount,
    description,
    senderName,
    senderAddress,
    senderAccountNumber,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
