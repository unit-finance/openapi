# UnitFinanceSdk::ListCreditDecisions200ResponseDataInner

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::ListCreditDecisions200ResponseDataInner.openapi_one_of
# =>
# [
#   :'ApprovedCreditLimitDecision',
#   :'DeniedCreditApplicationDecision',
#   :'DeniedCreditLimitDecision',
#   :'ManualReviewCreditApplicationDecision',
#   :'ManualReviewCreditLimitDecision'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::ListCreditDecisions200ResponseDataInner.openapi_discriminator_name
# => :'type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::ListCreditDecisions200ResponseDataInner.openapi_discriminator_mapping
# =>
# {
#   :'approvedCreditLimitDecision' => :'ApprovedCreditLimitDecision',
#   :'deniedCreditApplicationDecision' => :'DeniedCreditApplicationDecision',
#   :'deniedCreditLimitDecision' => :'DeniedCreditLimitDecision',
#   :'manualReviewCreditApplicationDecision' => :'ManualReviewCreditApplicationDecision',
#   :'manualReviewCreditLimitDecision' => :'ManualReviewCreditLimitDecision'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'unit_openapi_ruby_sdk'

UnitFinanceSdk::ListCreditDecisions200ResponseDataInner.build(data)
# => #<ApprovedCreditLimitDecision:0x00007fdd4aab02a0>

UnitFinanceSdk::ListCreditDecisions200ResponseDataInner.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `ApprovedCreditLimitDecision`
- `DeniedCreditApplicationDecision`
- `DeniedCreditLimitDecision`
- `ManualReviewCreditApplicationDecision`
- `ManualReviewCreditLimitDecision`
- `nil` (if no type matches)

