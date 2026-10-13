# UnitFinanceSdk::ACHPaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **status** | **String** | One of Pending, PendingReview, Rejected, Clearing, Sent, Canceled, Returned. See ACH Status. |  |
| **reason** | **String** | Optional. More information about the status. | [optional] |
| **counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other side of the ACH payment. |  |
| **direction** | **String** | The direction in which the funds flow (either Debit or Credit). |  |
| **description** | **String** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. |  |
| **addenda** | **String** | Optional, additional payment description (maximum of 50 characters), not all institutions present that. | [optional] |
| **amount** | **Integer** | The amount (cents) of the payment. |  |
| **settlement_date** | **Time** | Optional, for ACH debit with statuses Pending, Clearing, shows the date on which the payment will be settled. | [optional] |
| **expected_completion_date** | **Time** | Optional, for ACH credit with statuses Pending, Sent, shows the date on which the counterparty will handle the request. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. |  |
| **counterparty_verification_method** | **String** | Optional, shows the verification method of the counterparty: &#39;Plaid&#39;. | [optional] |
| **same_day** | **Boolean** | Indicates whether the payment is a Same Day ACH payment. See Same Day ACH. |  |
| **sec_code** | **String** | The 3-letter ACH Standard Entry Class (SEC) Code. One of WEB, CCD, PPD. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ACHPaymentAttributes.new(
  created_at: null,
  status: null,
  reason: null,
  counterparty: null,
  direction: null,
  description: null,
  addenda: null,
  amount: null,
  settlement_date: null,
  expected_completion_date: null,
  tags: null,
  counterparty_verification_method: null,
  same_day: null,
  sec_code: null
)
```

