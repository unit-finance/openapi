# UnitFinanceSdk::ReceivedACHDebitPositivePayAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **status** | **String** | One of Active, Expired, or Cancelled. |  |
| **originator_name** | **String** | Name of the ACH debit originator. |  |
| **originator_entity_id** | **String** | Entity ID of the ACH debit originator. |  |
| **amount** | **Integer** | Maximum allowed debit amount in cents. |  |
| **expiration_date** | **Date** | When the authorization expires. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ReceivedACHDebitPositivePayAttributes.new(
  created_at: null,
  status: null,
  originator_name: null,
  originator_entity_id: null,
  amount: null,
  expiration_date: null,
  tags: null
)
```

