# ReceivableAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [default to undefined]
**totalPrincipal** | [**ReceivableAttributesTotalPrincipal**](ReceivableAttributesTotalPrincipal.md) |  | [default to undefined]
**remainingPrincipal** | **number** | The remaining principal of the receivable that needs to be repaid. | [default to undefined]
**totalInterest** | [**ReceivableAttributesTotalInterest**](ReceivableAttributesTotalInterest.md) |  | [default to undefined]
**remainingInterest** | **number** | The remaining interest of the receivable that needs to be repaid. | [default to undefined]
**plan** | **string** | The plan the receivable belongs to, e.g. Purchase or Fee. | [default to undefined]
**repaymentStatus** | [**ReceivableAttributesRepaymentStatus**](ReceivableAttributesRepaymentStatus.md) |  | [default to undefined]
**purchaseDueDate** | **string** | The date the receivable is due e.g. 2024-12-31. | [optional] [default to undefined]
**purchasedTimestamp** | **string** | The date the receivable was purchased | [optional] [default to undefined]
**capitalPartnerId** | **string** | The capital partner id | [optional] [default to undefined]

## Example

```typescript
import { ReceivableAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: ReceivableAttributes = {
    createdAt,
    updatedAt,
    totalPrincipal,
    remainingPrincipal,
    totalInterest,
    remainingInterest,
    plan,
    repaymentStatus,
    purchaseDueDate,
    purchasedTimestamp,
    capitalPartnerId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
