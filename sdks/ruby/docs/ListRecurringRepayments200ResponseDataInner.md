# UnitFinanceSdk::ListRecurringRepayments200ResponseDataInner

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListRecurringRepayments200ResponseDataInner.openapi_one_of
# =>
# [
#   :'RecurringACHRepayment',
#   :'RecurringBookRepayment',
#   :'RecurringCapitalPartnerACHRepayment',
#   :'RecurringCapitalPartnerBookRepayment'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListRecurringRepayments200ResponseDataInner.openapi_discriminator_name
# => :'type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListRecurringRepayments200ResponseDataInner.openapi_discriminator_mapping
# =>
# {
#   :'recurringAchRepayment' => :'RecurringACHRepayment',
#   :'recurringBookRepayment' => :'RecurringBookRepayment',
#   :'recurringCapitalPartnerAchRepayment' => :'RecurringCapitalPartnerACHRepayment',
#   :'recurringCapitalPartnerBookRepayment' => :'RecurringCapitalPartnerBookRepayment'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_finance_sdk'

UnitFinanceSdk::ListRecurringRepayments200ResponseDataInner.build(data)
# => #<RecurringACHRepayment:0x00007fdd4aab02a0>

UnitFinanceSdk::ListRecurringRepayments200ResponseDataInner.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `RecurringACHRepayment`
- `RecurringBookRepayment`
- `RecurringCapitalPartnerACHRepayment`
- `RecurringCapitalPartnerBookRepayment`
- `nil` (if no type matches)

