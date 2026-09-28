# UnitFinanceSdk::CreateReceivedACHDebitPositivePayDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **originator_name** | **String** | Name of the ACH Received Payment originator. Required if originatorEntityId is not provided. |  |
| **originator_entity_id** | **String** | Entity ID of the ACH Received Payment originator. Required if originatorName is not provided. |  |
| **amount** | **Integer** | Maximum allowed debit amount in cents. Decisioning uses this as a maximum. | [optional] |
| **expiration_date** | **Date** | When the authorization expires. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateReceivedACHDebitPositivePayDataAttributes.new(
  originator_name: Payroll Company Inc,
  originator_entity_id: 1234567,
  amount: 500000,
  expiration_date: Thu Dec 31 00:00:00 UTC 2026,
  tags: {&quot;purpose&quot;:&quot;payroll&quot;}
)
```

