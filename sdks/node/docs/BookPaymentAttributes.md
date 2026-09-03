# BookPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**status** | **string** | Either Sent or Rejected (see reason for details). | [default to undefined]
**reason** | **string** | Optional. More information about the status. | [optional] [default to undefined]
**direction** | **string** | The direction in which the funds flow (either Debit or Credit). | [default to undefined]
**description** | **string** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. | [default to undefined]
**transactionSummaryOverride** | **string** | If this field is populated, its contents will be returned as the bookTransaction\&#39;s summary field (maximum of 100 characters). | [optional] [default to undefined]
**amount** | **number** | The amount (cents) of the payment. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { BookPaymentAttributes } from '@unit-finance/unit-node-sdk';

const instance: BookPaymentAttributes = {
    createdAt,
    status,
    reason,
    direction,
    description,
    transactionSummaryOverride,
    amount,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
