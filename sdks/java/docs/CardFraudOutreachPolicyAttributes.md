

# CardFraudOutreachPolicyAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**activitiesLookBackPeriodHours** | **Integer** | The period in hours before the card fraud case was created, for which the card fraud case activities were included in the case. Can be one of the following periods: 12, 24, 48, 72 |  |
|**caseExpirationPeriodHours** | **Integer** | The period in hours after the card fraud case was created, after which the card fraud case expires. Can be one of the following periods: 12, 24, 48, 72. |  |
|**numberOfCardActivities** | **Integer** | The number of card activities that are included in the card fraud case. Up to 5 activities max. |  |
|**businessRecipient** | **String** | For business cards, controls who receives the fraud outreach email. One of: CardHolder or CustomerAndCardHolder. When omitted or null, email goes to the cardholder only. |  [optional] |
|**contactPhone** | [**PhoneType**](PhoneType.md) | The client support contact phone number. |  |
|**contactUrl** | **String** | The client support contact URL. |  |
|**enabled** | **Boolean** | Indicates whether the policy is enabled. |  |



