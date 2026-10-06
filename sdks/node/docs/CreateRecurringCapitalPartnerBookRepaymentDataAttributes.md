# CreateRecurringCapitalPartnerBookRepaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Repayment description (maximum of 50 characters), this will show up on the statement of the counterparty. | [default to undefined]
**transactionSummaryOverride** | **string** | If this field is populated, its contents will be returned as the bookTransaction\&#39;s summary field (maximum of 100 characters). | [optional] [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Tags that will be copied to any transaction that this recurring repayment creates (see Tag Inheritance). | [optional] [default to undefined]

## Example

```typescript
import { CreateRecurringCapitalPartnerBookRepaymentDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateRecurringCapitalPartnerBookRepaymentDataAttributes = {
    description,
    transactionSummaryOverride,
    idempotencyKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
