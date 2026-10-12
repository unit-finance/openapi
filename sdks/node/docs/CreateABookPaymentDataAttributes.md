# CreateABookPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents). | [default to undefined]
**description** | **string** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. | [default to undefined]
**transactionSummaryOverride** | **string** | Optional. If this field is populated, its contents will be returned as the bookTransaction\&#39;s summary field (maximum of 100 characters). | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] [default to undefined]

## Example

```typescript
import { CreateABookPaymentDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateABookPaymentDataAttributes = {
    amount,
    description,
    transactionSummaryOverride,
    idempotencyKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
