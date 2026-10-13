# UnitFinanceSdk::BusinessContactType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **full_name** | [**FullNameType**](FullNameType.md) | Full name of the contact. |  |
| **email** | **String** | The contact&#39;s email address. |  |
| **phone** | [**PhoneType**](PhoneType.md) | The contact&#39;s phone number. |  |
| **jwt_subject** | **String** | Optional. See this section for more information. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::BusinessContactType.new(
  full_name: null,
  email: null,
  phone: null,
  jwt_subject: null
)
```

