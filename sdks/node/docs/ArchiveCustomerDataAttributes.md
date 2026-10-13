# ArchiveCustomerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **string** | The reason for archiving the customer. One of Inactive, FraudACHActivity, FraudCardActivity, FraudCheckActivity, FraudApplicationHistory, FraudAccountActivity, FraudClientIdentified, FraudLinkedToFraudulentCustomer, ByBank. This list is subject to change. | [default to undefined]

## Example

```typescript
import { ArchiveCustomerDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: ArchiveCustomerDataAttributes = {
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
