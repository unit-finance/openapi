# UnitFinanceSdk::UpdatePolicyDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **contact_phone** | [**PhoneType**](PhoneType.md) | The client support contact phone number. | [optional] |
| **contact_url** | **String** | The client support contact URL. Should be a valid https URL. | [optional] |
| **activities_look_back_period_hours** | **Integer** | The period in hours before the card fraud case was created, for which the card fraud case activities will be included in the case. Can be one of the following periods: 12, 24, 48, 72. | [optional] |
| **case_expiration_period_hours** | **Integer** | The period in hours after the card fraud case was created, after which the card fraud case expires. Can be one of the following periods: 12, 24, 48, 72. | [optional] |
| **number_of_card_activities** | **Integer** | The number of card activities that will be included in the card fraud case. Up to 5 activities max. | [optional] |
| **business_recipient** | **String** | For business cards, controls who receives the fraud outreach email. One of: CardHolder (cardholder only; also the behavior when omitted) or CustomerAndCardHolder (cardholder on to, business customer cc&#39;d). | [optional] |
| **fraud_rules_suppression_days** | **Integer** | Sets suppression window (1–7 days) for fraud rules following a confirmed legitimate transaction. Up to 7 days maximum. | [optional] |
| **email_outreach_settings** | **String** | The id of the email outreach settings to be used for the policy. | [optional] |
| **message_outreach_settings** | **String** | The id of the message outreach settings to be used for the policy. | [optional] |
| **white_label_theme** | **String** | The id of the white-label theme to be used for the policy. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdatePolicyDataAttributes.new(
  contact_phone: null,
  contact_url: https://thisIsMyDomain.unit.co,
  activities_look_back_period_hours: 72,
  case_expiration_period_hours: 72,
  number_of_card_activities: 3,
  business_recipient: CardHolder,
  fraud_rules_suppression_days: 1,
  email_outreach_settings: 10001,
  message_outreach_settings: 10002,
  white_label_theme: 100081
)
```

