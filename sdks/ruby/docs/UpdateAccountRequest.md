# UnitFinanceSdk::UpdateAccountRequest

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::UpdateAccountRequest.openapi_one_of
# =>
# [
#   :'UpdateCreditAccountRequest',
#   :'UpdateDepositAccountRequest',
#   :'UpdateWalletRequest'
# ]
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::UpdateAccountRequest.build(data)
# => #<UpdateCreditAccountRequest:0x00007fdd4aab02a0>

UnitFinanceSdk::UpdateAccountRequest.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `UpdateCreditAccountRequest`
- `UpdateDepositAccountRequest`
- `UpdateWalletRequest`
- `nil` (if no type matches)

