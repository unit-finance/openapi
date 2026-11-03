# FreezeDepositAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **string** | One of Fraud, ByBank, or Other. | [default to undefined]
**subReason** | **string** | Optional for Fraud and required for ByBank. For Fraud: AchActivity, CardActivity, AccountActivity, CheckActivity, WireActivity, HoldHarmlessReceived, LinkedToFraudulentCustomer. For ByBank: ProhibitedBusiness, MissingCddEdd, NonUsOperations, SuspectedFraud, Inactive, Unfunded, OngoingReevaluation, LegalRequestReceived, ErroneousPayment, Other. | [optional] [default to undefined]
**reasonText** | **string** | Required when reason&#x3D;Other (1..255). Optional for Fraud and ByBank (max 255). | [optional] [default to undefined]

## Example

```typescript
import { FreezeDepositAccountDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: FreezeDepositAccountDataAttributes = {
    reason,
    subReason,
    reasonText,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
