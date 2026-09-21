# CardFraudOutreachPolicyAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**activitiesLookBackPeriodHours** | **number** | The period in hours before the card fraud case was created, for which the card fraud case activities were included in the case. Can be one of the following periods: 12, 24, 48, 72 | [default to undefined]
**caseExpirationPeriodHours** | **number** | The period in hours after the card fraud case was created, after which the card fraud case expires. Can be one of the following periods: 12, 24, 48, 72. | [default to undefined]
**numberOfCardActivities** | **number** | The number of card activities that are included in the card fraud case. Up to 5 activities max. | [default to undefined]
**businessRecipient** | **string** | For business cards, controls who receives the fraud outreach email. One of: CardHolder or CustomerAndCardHolder. When omitted or null, email goes to the cardholder only. | [optional] [default to undefined]
**contactPhone** | [**PhoneType**](PhoneType.md) | The client support contact phone number. | [default to undefined]
**contactUrl** | **string** | The client support contact URL. | [default to undefined]
**enabled** | **boolean** | Indicates whether the policy is enabled. | [default to undefined]

## Example

```typescript
import { CardFraudOutreachPolicyAttributes } from '@unit-finance/unit-node-sdk';

const instance: CardFraudOutreachPolicyAttributes = {
    createdAt,
    activitiesLookBackPeriodHours,
    caseExpirationPeriodHours,
    numberOfCardActivities,
    businessRecipient,
    contactPhone,
    contactUrl,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
