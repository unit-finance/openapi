# UnitFinanceSdk::ACHReceivedPaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the transaction was created. Common to all receive payment types. |  |
| **status** | **String** | The status of the Received Payment. One of Pending, PendingReview, MarkedForReturn, Advanced, Completed or Returned. See ReceivedPayment Statuses. Common to all received payment types. |  |
| **was_advanced** | **Boolean** | Will be true if the received payment was or is being Advanced (has or has had the status Advanced). Common to all received payment types. |  |
| **is_advanceable** | **Boolean** | Will be true if the received payment can be advanced. | [optional] |
| **direction** | **String** | The direction in which the funds flow (either Debit or Credit). |  |
| **completion_date** | **Time** | Shows the date on which the received ACH will be completed (settled or repaid). |  |
| **return_reason** | **String** | Optional. The reason if the received payment is Returned. See ACH return reasons. | [optional] |
| **amount** | **Integer** | The amount (cents) of the ACH received payment. Common to all received payment types. |  |
| **description** | **String** | ACH description (maximum of 10 characters), also known as Company Entry Description. |  |
| **addenda** | **String** | Optional. Additional transaction description (maximum of 80 characters). | [optional] |
| **company_name** | **String** | The name by which the originator is known to the receiver. |  |
| **originator_entity_id** | **String** | Optional. A unique identifier by which the originator is formally recognized within the ACH network. | [optional] |
| **receiving_entity_name** | **String** | Optional. The name of the Recipient as it was declared by the originator of the payment. | [optional] |
| **counterparty_routing_number** | **String** | The routing number of the party that originated the received ACH payment. |  |
| **trace_number** | **String** | The ACH Trace Number. |  |
| **sec_code** | **String** | Optional. The 3-letter ACH Standard Entry Class (SEC) Code (e.g. WEB, CCD, PPD, etc.). | [optional] |
| **return_cutoff_time** | **Time** | Optional. The last time when a reprocess will be accepted. Will be the next banking day 2pm ET. | [optional] |
| **can_be_reprocessed** | **Boolean** | Optional. If set to true, the Received Payment can be reprocessed until the returnCutoffTime. If empty, the Received Payments can&#39;t be reprocessed. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ACHReceivedPaymentAttributes.new(
  created_at: null,
  status: null,
  was_advanced: null,
  is_advanceable: null,
  direction: null,
  completion_date: null,
  return_reason: null,
  amount: null,
  description: null,
  addenda: null,
  company_name: null,
  originator_entity_id: null,
  receiving_entity_name: null,
  counterparty_routing_number: null,
  trace_number: null,
  sec_code: null,
  return_cutoff_time: null,
  can_be_reprocessed: null,
  tags: null
)
```

