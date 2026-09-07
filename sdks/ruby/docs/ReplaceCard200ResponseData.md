# UnitFinanceSdk::ReplaceCard200ResponseData

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ReplaceCard200ResponseData.openapi_one_of
# =>
# [
#   :'BusinessDebitCard',
#   :'IndividualDebitCard'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ReplaceCard200ResponseData.openapi_discriminator_name
# => :'type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ReplaceCard200ResponseData.openapi_discriminator_mapping
# =>
# {
#   :'businessDebitCard' => :'BusinessDebitCard',
#   :'individualDebitCard' => :'IndividualDebitCard'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ReplaceCard200ResponseData.build(data)
# => #<BusinessDebitCard:0x00007fdd4aab02a0>

UnitFinanceSdk::ReplaceCard200ResponseData.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `BusinessDebitCard`
- `IndividualDebitCard`
- `nil` (if no type matches)

