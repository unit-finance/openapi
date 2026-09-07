

# ACHPaymentAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**status** | **String** | One of Pending, PendingReview, Rejected, Clearing, Sent, Canceled, Returned. See ACH Status. |  |
|**reason** | **String** | Optional. More information about the status. |  [optional] |
|**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other side of the ACH payment. |  |
|**direction** | **String** | The direction in which the funds flow (either Debit or Credit). |  |
|**description** | **String** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. |  |
|**addenda** | **String** | Optional, additional payment description (maximum of 50 characters), not all institutions present that. |  [optional] |
|**amount** | **Integer** | The amount (cents) of the payment. |  |
|**settlementDate** | **OffsetDateTime** | Optional, for ACH debit with statuses Pending, Clearing, shows the date on which the payment will be settled. |  [optional] |
|**expectedCompletionDate** | **OffsetDateTime** | Optional, for ACH credit with statuses Pending, Sent, shows the date on which the counterparty will handle the request. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |
|**counterpartyVerificationMethod** | **String** | Optional, shows the verification method of the counterparty: &#39;Plaid&#39;. |  [optional] |
|**sameDay** | **Boolean** | Indicates whether the payment is a Same Day ACH payment. See Same Day ACH. |  |
|**secCode** | **String** | The 3-letter ACH Standard Entry Class (SEC) Code. One of WEB, CCD, PPD. |  |



