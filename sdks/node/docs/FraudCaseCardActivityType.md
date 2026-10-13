# FraudCaseCardActivityType

Represents a card activity that is part of a TransactionCardFraudCase or AuthorizationCardFraudCase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The id of the fraud case card activity. | [default to undefined]
**createdAt** | **string** | The date the activity was created. | [default to undefined]
**activityType** | **string** | The type of the activity. Can be either Authorization or Transaction. | [default to undefined]
**cardActivityCreatedAt** | **string** | The creation date of the original Authorization or Transaction the activity was created upon. | [default to undefined]
**cardActivity** | **string** | The id of the original Authorization or Transaction of the activity. | [default to undefined]
**location** | **string** | The location in which the activity occurred. | [default to undefined]
**merchant** | **string** | The name of the merchant of the activity. | [default to undefined]
**amount** | **number** | The amount (in cents) of the activity. | [default to undefined]
**decision** | **string** | The decision made for the activity. Can be one of Pending, Fraud, NoFraud. | [default to undefined]
**updatedAt** | **string** | The date the activity was last updated. | [default to undefined]

## Example

```typescript
import { FraudCaseCardActivityType } from '@unit-finance/unit-openapi-node-sdk';

const instance: FraudCaseCardActivityType = {
    id,
    createdAt,
    activityType,
    cardActivityCreatedAt,
    cardActivity,
    location,
    merchant,
    amount,
    decision,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
