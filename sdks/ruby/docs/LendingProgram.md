# UnitFinanceSdk::LendingProgram

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** | Type of the lending program, e.g. bankSponsoredChargeCardProgram, clientSponsoredChargeCardProgram or receivablesRetentionProgram. |  |
| **id** | **String** |  |  |
| **attributes** | [**LendingProgramAttributes**](LendingProgramAttributes.md) |  |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::LendingProgram.new(
  type: null,
  id: null,
  attributes: null
)
```

