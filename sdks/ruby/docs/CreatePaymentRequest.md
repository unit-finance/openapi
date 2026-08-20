# UnitFinanceSdk::CreatePaymentRequest

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::CreatePaymentRequest.openapi_one_of
# =>
# [
#   :'CreateABookPaymentRequest',
#   :'CreateACHPaymentExistingCounterpartyRequest',
#   :'CreateACHPaymentPlaidTokenRequest',
#   :'CreateACHPaymentRequest',
#   :'CreateAWirePaymentRequest'
# ]
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::CreatePaymentRequest.build(data)
# => #<CreateABookPaymentRequest:0x00007fdd4aab02a0>

UnitFinanceSdk::CreatePaymentRequest.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `CreateABookPaymentRequest`
- `CreateACHPaymentExistingCounterpartyRequest`
- `CreateACHPaymentPlaidTokenRequest`
- `CreateACHPaymentRequest`
- `CreateAWirePaymentRequest`
- `nil` (if no type matches)

