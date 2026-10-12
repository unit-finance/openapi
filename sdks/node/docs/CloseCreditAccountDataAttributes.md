# CloseCreditAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **string** | The reason for closing the account. Either ByCustomer, Fraud or Overdue. If not specified, will default to ByCustomer. | [optional] [default to undefined]
**fraudReason** | **string** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] [default to undefined]

## Example

```typescript
import { CloseCreditAccountDataAttributes } from 'unit-openapi-node-sdk';

const instance: CloseCreditAccountDataAttributes = {
    reason,
    fraudReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
