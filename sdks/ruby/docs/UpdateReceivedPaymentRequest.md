# UnitFinanceSdk::UpdateReceivedPaymentRequest

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::UpdateReceivedPaymentRequest.openapi_one_of
# =>
# [
#   :'UpdateACHReceivedPaymentRequest',
#   :'UpdateRealtimeReceivedPaymentRequest'
# ]
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::UpdateReceivedPaymentRequest.build(data)
# => #<UpdateACHReceivedPaymentRequest:0x00007fdd4aab02a0>

UnitFinanceSdk::UpdateReceivedPaymentRequest.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `UpdateACHReceivedPaymentRequest`
- `UpdateRealtimeReceivedPaymentRequest`
- `nil` (if no type matches)

