# UnitFinanceSdk::CreateStopPayment201ResponseData

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::CreateStopPayment201ResponseData.openapi_one_of
# =>
# [
#   :'ACHStopPayment',
#   :'CheckStopPayment'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::CreateStopPayment201ResponseData.openapi_discriminator_name
# => :'type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::CreateStopPayment201ResponseData.openapi_discriminator_mapping
# =>
# {
#   :'achStopPayment' => :'ACHStopPayment',
#   :'checkStopPayment' => :'CheckStopPayment'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::CreateStopPayment201ResponseData.build(data)
# => #<ACHStopPayment:0x00007fdd4aab02a0>

UnitFinanceSdk::CreateStopPayment201ResponseData.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `ACHStopPayment`
- `CheckStopPayment`
- `nil` (if no type matches)

