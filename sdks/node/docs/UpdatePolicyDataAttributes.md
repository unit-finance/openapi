# UpdatePolicyDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactPhone** | [**PhoneType**](PhoneType.md) | The client support contact phone number. | [optional] [default to undefined]
**contactUrl** | **string** | The client support contact URL. Should be a valid https URL. | [optional] [default to undefined]
**activitiesLookBackPeriodHours** | **number** | The period in hours before the card fraud case was created, for which the card fraud case activities will be included in the case. Can be one of the following periods: 12, 24, 48, 72. | [optional] [default to undefined]
**caseExpirationPeriodHours** | **number** | The period in hours after the card fraud case was created, after which the card fraud case expires. Can be one of the following periods: 12, 24, 48, 72. | [optional] [default to undefined]
**numberOfCardActivities** | **number** | The number of card activities that will be included in the card fraud case. Up to 5 activities max. | [optional] [default to undefined]
**businessRecipient** | **string** | For business cards, controls who receives the fraud outreach email. One of: CardHolder (cardholder only; also the behavior when omitted) or CustomerAndCardHolder (cardholder on to, business customer cc\&#39;d). | [optional] [default to undefined]
**fraudRulesSuppressionDays** | **number** | Sets suppression window (1–7 days) for fraud rules following a confirmed legitimate transaction. Up to 7 days maximum. | [optional] [default to undefined]
**emailOutreachSettings** | **string** | The id of the email outreach settings to be used for the policy. | [optional] [default to undefined]
**messageOutreachSettings** | **string** | The id of the message outreach settings to be used for the policy. | [optional] [default to undefined]
**whiteLabelTheme** | **string** | The id of the white-label theme to be used for the policy. | [optional] [default to undefined]

## Example

```typescript
import { UpdatePolicyDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: UpdatePolicyDataAttributes = {
    contactPhone,
    contactUrl,
    activitiesLookBackPeriodHours,
    caseExpirationPeriodHours,
    numberOfCardActivities,
    businessRecipient,
    fraudRulesSuppressionDays,
    emailOutreachSettings,
    messageOutreachSettings,
    whiteLabelTheme,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
