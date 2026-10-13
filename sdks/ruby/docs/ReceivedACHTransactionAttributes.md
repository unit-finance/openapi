# UnitFinanceSdk::ReceivedACHTransactionAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the transaction was created. Common to all transaction types. |  |
| **direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
| **amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
| **balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
| **summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
| **description** | **String** | Transaction description. |  |
| **addenda** | **String** | Additional transaction description (maximum of 50 characters). | [optional] |
| **company_name** | **String** | The name by which the originator is known to the receiver. |  |
| **counterparty_routing_number** | **String** | The routing number of the party that originated the ACH payment. |  |
| **trace_number** | **String** | The ACH Trace Number. |  |
| **sec_code** | **String** | The 3-letter ACH Standard Entry Class (SEC) Code (e.g. WEB, CCD, PPD, etc.). | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ReceivedACHTransactionAttributes.new(
  created_at: null,
  direction: null,
  amount: null,
  balance: null,
  summary: null,
  description: null,
  addenda: null,
  company_name: null,
  counterparty_routing_number: null,
  trace_number: null,
  sec_code: null,
  tags: null
)
```

