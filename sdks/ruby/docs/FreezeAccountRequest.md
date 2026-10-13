# UnitFinanceSdk::FreezeAccountRequest

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::FreezeAccountRequest.openapi_one_of
# =>
# [
#   :'FreezeCreditAccountRequest',
#   :'FreezeDepositAccountRequest',
#   :'FreezeWalletRequest'
# ]
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::FreezeAccountRequest.build(data)
# => #<FreezeCreditAccountRequest:0x00007fdd4aab02a0>

UnitFinanceSdk::FreezeAccountRequest.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `FreezeCreditAccountRequest`
- `FreezeDepositAccountRequest`
- `FreezeWalletRequest`
- `nil` (if no type matches)

