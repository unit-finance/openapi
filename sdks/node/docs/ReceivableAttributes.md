# ReceivableAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [default to undefined]
**originalAmount** | **number** | The original amount of the receivable that need to be repaid. | [default to undefined]
**remainingAmount** | **number** | The remaining amount of the receivable that need to be repaid. | [default to undefined]
**repaymentStatus** | [**ReceivableAttributesRepaymentStatus**](ReceivableAttributesRepaymentStatus.md) |  | [default to undefined]
**purchaseDueDate** | **string** | The date the receivable is due e.g. 2024-12-31. | [optional] [default to undefined]
**purchasedTimestamp** | **string** | The date the receivable was purchased | [optional] [default to undefined]
**capitalPartnerId** | **string** | The capital partner id | [optional] [default to undefined]

## Example

```typescript
import { ReceivableAttributes } from 'unit-openapi-node-sdk';

const instance: ReceivableAttributes = {
    createdAt,
    updatedAt,
    originalAmount,
    remainingAmount,
    repaymentStatus,
    purchaseDueDate,
    purchasedTimestamp,
    capitalPartnerId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
