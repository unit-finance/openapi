# UnitFinanceSdk::AuthorizedUserType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **full_name** | [**FullNameType**](FullNameType.md) | Full name of the authorized user. |  |
| **email** | **String** | The authorized user&#39;s email address. |  |
| **phone** | [**PhoneType**](PhoneType.md) | The authorized user&#39;s phone number. This number will be used for One Time Password (OTP) authentication. |  |
| **jwt_subject** | **String** | Optional. See this section for more information. | [optional] |
| **can_connect_with_auth_vendor** | **Boolean** | Optional. Default is true. When set to false, the authorized user cannot authenticate through exchange networks such as Plaid. See Plaid Exchange for more information. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::AuthorizedUserType.new(
  full_name: null,
  email: null,
  phone: null,
  jwt_subject: null,
  can_connect_with_auth_vendor: null
)
```

