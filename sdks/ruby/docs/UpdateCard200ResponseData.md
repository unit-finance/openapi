# UnitFinanceSdk::UpdateCard200ResponseData

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::UpdateCard200ResponseData.openapi_one_of
# =>
# [
#   :'BusinessDebitCard',
#   :'BusinessVirtualDebitCard',
#   :'IndividualDebitCard',
#   :'IndividualVirtualDebitCard'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::UpdateCard200ResponseData.openapi_discriminator_name
# => :'type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::UpdateCard200ResponseData.openapi_discriminator_mapping
# =>
# {
#   :'businessDebitCard' => :'BusinessDebitCard',
#   :'businessVirtualDebitCard' => :'BusinessVirtualDebitCard',
#   :'individualDebitCard' => :'IndividualDebitCard',
#   :'individualVirtualDebitCard' => :'IndividualVirtualDebitCard'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::UpdateCard200ResponseData.build(data)
# => #<BusinessDebitCard:0x00007fdd4aab02a0>

UnitFinanceSdk::UpdateCard200ResponseData.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `BusinessDebitCard`
- `BusinessVirtualDebitCard`
- `IndividualDebitCard`
- `IndividualVirtualDebitCard`
- `nil` (if no type matches)

