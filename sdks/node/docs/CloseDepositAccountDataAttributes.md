# CloseDepositAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **string** | The reason for closing the account. Either ByCustomer, Fraud, ByBank, or NegativeBalance. | [default to undefined]
**fraudReason** | **string** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] [default to undefined]
**bankReason** | **string** | Optional. The expanded bank reason for closing the account when ByBank is specified as the reason. Can be one of: (ProhibitedBusiness, MissingCddEdd, NonUsOperations, SuspectedFraud). This list is subject to change. | [optional] [default to undefined]

## Example

```typescript
import { CloseDepositAccountDataAttributes } from 'unit-openapi-node-sdk';

const instance: CloseDepositAccountDataAttributes = {
    reason,
    fraudReason,
    bankReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
