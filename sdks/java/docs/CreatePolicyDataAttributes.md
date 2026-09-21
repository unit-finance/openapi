

# CreatePolicyDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**contactPhone** | [**PhoneType**](PhoneType.md) | The client support contact phone number. |  |
|**contactUrl** | **String** | The client support contact URL. Should be a valid https URL. |  |
|**activitiesLookBackPeriodHours** | **Integer** | Optional. The period in hours before the card fraud case was created, for which the card fraud case activities will be included in the case. Can be one of the following periods: 12, 24, 48, 72 |  [optional] |
|**caseExpirationPeriodHours** | **Integer** | Optional. The period in hours after the card fraud case was created, after which the card fraud case expires. Can be one of the following periods: 12, 24, 48, 72 |  [optional] |
|**numberOfCardActivities** | **Integer** | Optional. The number of card activities that will be included in the card fraud case. Up to 5 activities max. |  [optional] |
|**businessRecipient** | **String** | Optional. For business cards, controls who receives the fraud outreach email. One of: CardHolder (cardholder only; also the behavior when omitted) or CustomerAndCardHolder (cardholder on to, business customer cc&#39;d). |  [optional] |
|**fraudRulesSuppressionDays** | **Integer** | Optional. Sets suppression window (1–7 days) for fraud rules following a confirmed legitimate transaction. Up to 7 days maximum. |  [optional] |
|**idempotencyKey** | **String** | Optional. See Idempotency. |  [optional] |



