# UnitFinanceSdk::CardFraudOutreachPolicyAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **activities_look_back_period_hours** | **Integer** | The period in hours before the card fraud case was created, for which the card fraud case activities were included in the case. Can be one of the following periods: 12, 24, 48, 72 |  |
| **case_expiration_period_hours** | **Integer** | The period in hours after the card fraud case was created, after which the card fraud case expires. Can be one of the following periods: 12, 24, 48, 72. |  |
| **number_of_card_activities** | **Integer** | The number of card activities that are included in the card fraud case. Up to 5 activities max. |  |
| **business_recipient** | **String** | For business cards, controls who receives the fraud outreach email. One of: CardHolder or CustomerAndCardHolder. When omitted or null, email goes to the cardholder only. | [optional] |
| **contact_phone** | [**PhoneType**](PhoneType.md) | The client support contact phone number. |  |
| **contact_url** | **String** | The client support contact URL. |  |
| **enabled** | **Boolean** | Indicates whether the policy is enabled. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CardFraudOutreachPolicyAttributes.new(
  created_at: null,
  activities_look_back_period_hours: null,
  case_expiration_period_hours: null,
  number_of_card_activities: null,
  business_recipient: null,
  contact_phone: null,
  contact_url: null,
  enabled: null
)
```

