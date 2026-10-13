# UnitFinanceSdk::ListTransactions200ResponseIncludedInner

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::ListTransactions200ResponseIncludedInner.openapi_one_of
# =>
# [
#   :'CreditAccount',
#   :'DepositAccount'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::ListTransactions200ResponseIncludedInner.openapi_discriminator_name
# => :'type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::ListTransactions200ResponseIncludedInner.openapi_discriminator_mapping
# =>
# {
#   :'creditAccount' => :'CreditAccount',
#   :'depositAccount' => :'DepositAccount'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::ListTransactions200ResponseIncludedInner.build(data)
# => #<CreditAccount:0x00007fdd4aab02a0>

UnitFinanceSdk::ListTransactions200ResponseIncludedInner.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `CreditAccount`
- `DepositAccount`
- `nil` (if no type matches)

