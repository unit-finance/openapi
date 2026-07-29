# UnitFinanceSdk::CloseAccountRequest

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::CloseAccountRequest.openapi_one_of
# =>
# [
#   :'CloseCreditAccountRequest',
#   :'CloseDepositAccountRequest',
#   :'CloseWalletRequest'
# ]
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::CloseAccountRequest.build(data)
# => #<CloseCreditAccountRequest:0x00007fdd4aab02a0>

UnitFinanceSdk::CloseAccountRequest.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `CloseCreditAccountRequest`
- `CloseDepositAccountRequest`
- `CloseWalletRequest`
- `nil` (if no type matches)

