# UnitFinanceSdk::ListPositivePay200ResponseDataInner

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListPositivePay200ResponseDataInner.openapi_one_of
# =>
# [
#   :'CheckPaymentPositivePay',
#   :'ReceivedACHDebitPositivePay',
#   :'WireDrawdownPositivePay'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListPositivePay200ResponseDataInner.openapi_discriminator_name
# => :'type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListPositivePay200ResponseDataInner.openapi_discriminator_mapping
# =>
# {
#   :'checkPaymentPositivePay' => :'CheckPaymentPositivePay',
#   :'drawdownPositivePay' => :'WireDrawdownPositivePay',
#   :'receivedAchDebitPositivePay' => :'ReceivedACHDebitPositivePay'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListPositivePay200ResponseDataInner.build(data)
# => #<CheckPaymentPositivePay:0x00007fdd4aab02a0>

UnitFinanceSdk::ListPositivePay200ResponseDataInner.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `CheckPaymentPositivePay`
- `ReceivedACHDebitPositivePay`
- `WireDrawdownPositivePay`
- `nil` (if no type matches)

