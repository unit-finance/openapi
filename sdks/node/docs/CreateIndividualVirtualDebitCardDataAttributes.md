# CreateIndividualVirtualDebitCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**limits** | **{ [key: string]: any; }** | See Limits (cents). | [optional] [default to undefined]
**expiryDate** | **string** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. | [optional] [default to undefined]

## Example

```typescript
import { CreateIndividualVirtualDebitCardDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateIndividualVirtualDebitCardDataAttributes = {
    idempotencyKey,
    tags,
    limits,
    expiryDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
