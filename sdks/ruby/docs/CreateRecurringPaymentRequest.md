# UnitFinanceSdk::CreateRecurringPaymentRequest

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::CreateRecurringPaymentRequest.openapi_one_of
# =>
# [
#   :'CreateRecurringCreditACHPaymentRequest',
#   :'CreateRecurringCreditBookPaymentRequest',
#   :'CreateRecurringDebitACHPaymentRequest'
# ]
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::CreateRecurringPaymentRequest.build(data)
# => #<CreateRecurringCreditACHPaymentRequest:0x00007fdd4aab02a0>

UnitFinanceSdk::CreateRecurringPaymentRequest.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `CreateRecurringCreditACHPaymentRequest`
- `CreateRecurringCreditBookPaymentRequest`
- `CreateRecurringDebitACHPaymentRequest`
- `nil` (if no type matches)

