# UnitFinanceSdk::List200ResponseDataInner

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::List200ResponseDataInner.openapi_one_of
# =>
# [
#   :'BusinessApplication',
#   :'IndividualApplication'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::List200ResponseDataInner.openapi_discriminator_name
# => :'type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::List200ResponseDataInner.openapi_discriminator_mapping
# =>
# {
#   :'businessApplication' => :'BusinessApplication',
#   :'individualApplication' => :'IndividualApplication'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::List200ResponseDataInner.build(data)
# => #<BusinessApplication:0x00007fdd4aab02a0>

UnitFinanceSdk::List200ResponseDataInner.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `BusinessApplication`
- `IndividualApplication`
- `nil` (if no type matches)

