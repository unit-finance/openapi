# UnitFinanceSdk::LendingProgramExtendedInformationAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **program_size_available** | **Integer** | The currently available size of the lending program, in cents. | [optional] |
| **program_size_allocated** | **Integer** | The currently allocated size of the lending program, in cents. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::LendingProgramExtendedInformationAttributes.new(
  program_size_available: null,
  program_size_allocated: null
)
```

