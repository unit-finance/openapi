# UnitFinanceSdk::LendingProgram

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** | The lending program type, e.g. &#x60;bankSponsoredChargeCardProgram&#x60;. The set of program types is open-ended and is not enumerated here. |  |
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

