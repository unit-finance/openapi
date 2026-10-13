# UnitFinanceSdk::CreateBulkPaymentRequestDataInner

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::CreateBulkPaymentRequestDataInner.openapi_one_of
# =>
# [
#   :'CreateABookPaymentData',
#   :'CreateACHPaymentData',
#   :'CreateACHPaymentExistingCounterpartyData',
#   :'CreateACHPaymentPlaidTokenData',
#   :'CreateAWirePaymentData'
# ]
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::CreateBulkPaymentRequestDataInner.build(data)
# => #<CreateABookPaymentData:0x00007fdd4aab02a0>

UnitFinanceSdk::CreateBulkPaymentRequestDataInner.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `CreateABookPaymentData`
- `CreateACHPaymentData`
- `CreateACHPaymentExistingCounterpartyData`
- `CreateACHPaymentPlaidTokenData`
- `CreateAWirePaymentData`
- `nil` (if no type matches)

