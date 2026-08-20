# UpdateACHPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **{ [key: string]: any; }** | See Updating Tags. | [optional] [default to undefined]
**clearingDaysOverride** | **number** | Only supports ACH Payments with direction Debit in status PendingReview or Pending. See Dynamic Clearing Period. | [optional] [default to undefined]

## Example

```typescript
import { UpdateACHPaymentDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: UpdateACHPaymentDataAttributes = {
    tags,
    clearingDaysOverride,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
