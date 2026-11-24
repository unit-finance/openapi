# UnitFinanceSdk::ReceivableAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. |  |
| **total_principal** | [**ReceivableAttributesTotalPrincipal**](ReceivableAttributesTotalPrincipal.md) |  |  |
| **remaining_principal** | **Integer** | The remaining principal of the receivable that needs to be repaid. |  |
| **total_interest** | [**ReceivableAttributesTotalInterest**](ReceivableAttributesTotalInterest.md) |  |  |
| **remaining_interest** | **Integer** | The remaining interest of the receivable that needs to be repaid. |  |
| **plan** | **String** | The plan the receivable belongs to, e.g. Purchase or Fee. |  |
| **repayment_status** | [**ReceivableAttributesRepaymentStatus**](ReceivableAttributesRepaymentStatus.md) |  |  |
| **purchase_due_date** | **Date** | The date the receivable is due e.g. 2024-12-31. | [optional] |
| **purchased_timestamp** | **Time** | The date the receivable was purchased | [optional] |
| **capital_partner_id** | **String** | The capital partner id | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ReceivableAttributes.new(
  created_at: null,
  updated_at: null,
  total_principal: null,
  remaining_principal: null,
  total_interest: null,
  remaining_interest: null,
  plan: null,
  repayment_status: null,
  purchase_due_date: null,
  purchased_timestamp: null,
  capital_partner_id: null
)
```

