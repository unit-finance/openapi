# CreateBookRepaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Repayment description (maximum of 80 characters), this will show up on statement of the counterparty. | [default to undefined]
**amount** | **number** | The amount (cents) to repay. | [default to undefined]
**transactionSummaryOverride** | **string** | If this field is populated, its contents will be returned as the bookTransaction\&#39;s summary field (maximum of 100 characters). | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateBookRepaymentDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateBookRepaymentDataAttributes = {
    description,
    amount,
    transactionSummaryOverride,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
