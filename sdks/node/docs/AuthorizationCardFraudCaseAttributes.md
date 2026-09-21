# AuthorizationCardFraudCaseAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**status** | **string** | The status of the card fraud case. Can be one of Created, Active, Closed, Expired. | [default to undefined]
**decision** | **string** | The decision made for the card fraud case. Can be one of Pending, Fraud, NoFraud. | [default to undefined]
**expiresAt** | **string** | The date the card fraud case expires. | [default to undefined]
**cardActivities** | [**Array&lt;FraudCaseCardActivityType&gt;**](FraudCaseCardActivityType.md) | The card activities associated with the card fraud case. | [default to undefined]
**updatedAt** | **string** | The date the resource was last updated. | [optional] [default to undefined]

## Example

```typescript
import { AuthorizationCardFraudCaseAttributes } from '@unit-finance/unit-node-sdk';

const instance: AuthorizationCardFraudCaseAttributes = {
    createdAt,
    status,
    decision,
    expiresAt,
    cardActivities,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
