# UnitFinanceSdk::ListRepayments200ResponseDataInner

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListRepayments200ResponseDataInner.openapi_one_of
# =>
# [
#   :'ACHRepayment',
#   :'BookRepayment',
#   :'ExternalRepayment'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListRepayments200ResponseDataInner.openapi_discriminator_name
# => :'type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListRepayments200ResponseDataInner.openapi_discriminator_mapping
# =>
# {
#   :'achRepayment' => :'ACHRepayment',
#   :'bookRepayment' => :'BookRepayment',
#   :'externalRepayment' => :'ExternalRepayment'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListRepayments200ResponseDataInner.build(data)
# => #<ACHRepayment:0x00007fdd4aab02a0>

UnitFinanceSdk::ListRepayments200ResponseDataInner.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `ACHRepayment`
- `BookRepayment`
- `ExternalRepayment`
- `nil` (if no type matches)

