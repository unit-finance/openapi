# UnitFinanceSdk::VerifyAccount200ResponseData

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **exists** | **Boolean** | true when a matching account is found; false otherwise. |  |
| **account** | [**VerifyAccount200ResponseDataAccount**](VerifyAccount200ResponseDataAccount.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::VerifyAccount200ResponseData.new(
  exists: null,
  account: null
)
```

