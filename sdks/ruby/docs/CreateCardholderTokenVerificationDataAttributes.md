# UnitFinanceSdk::CreateCardholderTokenVerificationDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel** | **String** | Send a verification code to the card holder through one of the following channels - sms or call. |  |
| **phone** | [**PhoneType**](PhoneType.md) | This allows providing the phone number of one of the customer&#39;s authorized users. The provided phone must match an authorized user phone and will be used in the One Time Password (OTP) authentication process instead of the business customer contact&#39;s phone. | [optional] |
| **app_hash** | **String** | For sms verifications only, 11-character hash string that identifies your app. Appended at the end of your verification SMS body the way that client-side SMS Retriever API expects. | [optional] |
| **language** | **String** | Select the verification language using a 2-letter code. Default is English. See Localization Options for the supported languages and their 2-letter code. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateCardholderTokenVerificationDataAttributes.new(
  channel: sms,
  phone: null,
  app_hash: null,
  language: null
)
```

