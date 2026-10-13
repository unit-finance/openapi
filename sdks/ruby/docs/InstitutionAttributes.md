# UnitFinanceSdk::InstitutionAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **routing_number** | **String** | Routing number of the institution. Valid 9-digit ABA routing transit number. |  |
| **name** | **String** | Name of the institution. |  |
| **address** | **String** | Address of the institution. | [optional] |
| **is_ach_supported** | **Boolean** | Is FedACH participant. |  |
| **is_wire_supported** | **Boolean** | Is Fedwire participant. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::InstitutionAttributes.new(
  routing_number: null,
  name: null,
  address: null,
  is_ach_supported: null,
  is_wire_supported: null
)
```

