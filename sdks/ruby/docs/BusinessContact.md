# UnitFinanceSdk::BusinessContact

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **full_name** | [**FullName**](FullName.md) | Full name of the contact. |  |
| **email** | **String** | The contact&#39;s email address. |  |
| **phone** | [**Phone**](Phone.md) | The contact&#39;s phone number. |  |
| **jwt_subject** | **String** | Optional. See this section for more information. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::BusinessContact.new(
  full_name: null,
  email: null,
  phone: null,
  jwt_subject: null
)
```

