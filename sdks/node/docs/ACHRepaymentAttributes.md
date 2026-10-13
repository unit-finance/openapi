# ACHRepaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [default to undefined]
**amount** | **number** | The amount (cents) of the payment. | [default to undefined]
**status** | **string** | Either Pending, PendingReview, Returned, Sent or Rejected | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { ACHRepaymentAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: ACHRepaymentAttributes = {
    createdAt,
    updatedAt,
    amount,
    status,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
