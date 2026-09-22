# UnitFinanceSdk::CheckPaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. |  |
| **status** | **String** | One of New, Pending, PendingCancellation, Canceled,InDelivery, Delivered, ReturnedToSender, Processed, PendingReview, MarkedForReturn, Returned, Rejected. |  |
| **amount** | **Integer** | The amount (cents) of the check deposit. |  |
| **description** | **String** | Description of the Check Payment. |  |
| **check_number** | **String** | The serial number printed at the bottom of the check | [optional] |
| **originated** | **Boolean** | True for checks originated through Unit | [optional] |
| **on_us** | **String** |  | [optional] |
| **on_us_auxiliary** | **String** |  | [optional] |
| **counterparty_routing_number** | **String** | The routing number of the party that deposited the Check. | [optional] |
| **return_status_reason** | **String** | The reason the Check Payment has been marked for return or returned. See Check Payment return reasons. | [optional] |
| **reject_reason** | **String** |  | [optional] |
| **pending_review_reasons** | **Array&lt;String&gt;** | List of reasons as to why the Check Payment is in pending review status, more reasons may be added in the future, current possible reasons: SoftLimit. | [optional] |
| **return_cutoff_time** | **Time** | The last time when a return will be accepted using the return Check Payment endpoint. | [optional] |
| **additional_verification_status** | **String** | Optional. One of &#39;Required&#39;, &#39;NotRequired&#39; or &#39;Approved&#39;, when Requires an additional verification will be required, see Approve Additional Verification. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **delivery_status** | **String** | One of Mailed, InLocalArea, Delivered, Rerouted, ReturnedToSender. Available once check status is InDelivery | [optional] |
| **tracked_at** | **Time** | The date of the last delivery status update. | [optional] |
| **postal_code** | **String** | The location of the last delivery status update. | [optional] |
| **expiration_date** | **Date** | check expiration date, formatted YYYY-MM--DD, e.g \&quot;2020-05-01\&quot;. | [optional] |
| **expected_delivery** | **Date** | check expected delivery date, formatted YYYY-MM--DD, e.g \&quot;2020-05-01\&quot;. | [optional] |
| **send_at** | **Time** | The date and time in which the check is to be sent. | [optional] |
| **counterparty** | [**CheckPaymentCounterpartyType**](CheckPaymentCounterpartyType.md) | The receiving party of the check. |  |
| **memo** | **String** | Text included on the memo line of the check. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CheckPaymentAttributes.new(
  created_at: null,
  updated_at: null,
  status: null,
  amount: null,
  description: null,
  check_number: null,
  originated: null,
  on_us: null,
  on_us_auxiliary: null,
  counterparty_routing_number: null,
  return_status_reason: null,
  reject_reason: null,
  pending_review_reasons: null,
  return_cutoff_time: null,
  additional_verification_status: null,
  tags: null,
  delivery_status: null,
  tracked_at: null,
  postal_code: null,
  expiration_date: null,
  expected_delivery: null,
  send_at: null,
  counterparty: null,
  memo: null
)
```

