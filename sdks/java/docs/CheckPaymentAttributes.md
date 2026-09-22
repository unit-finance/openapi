

# CheckPaymentAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | The date the resource was updated. |  |
|**status** | **String** | One of New, Pending, PendingCancellation, Canceled,InDelivery, Delivered, ReturnedToSender, Processed, PendingReview, MarkedForReturn, Returned, Rejected. |  |
|**amount** | **Integer** | The amount (cents) of the check deposit. |  |
|**description** | **String** | Description of the Check Payment. |  |
|**checkNumber** | **String** | The serial number printed at the bottom of the check |  [optional] |
|**originated** | **Boolean** | True for checks originated through Unit |  [optional] |
|**onUs** | **String** |  |  [optional] |
|**onUsAuxiliary** | **String** |  |  [optional] |
|**counterpartyRoutingNumber** | **String** | The routing number of the party that deposited the Check. |  [optional] |
|**returnStatusReason** | **String** | The reason the Check Payment has been marked for return or returned. See Check Payment return reasons. |  [optional] |
|**rejectReason** | **String** |  |  [optional] |
|**pendingReviewReasons** | **List&lt;String&gt;** | List of reasons as to why the Check Payment is in pending review status, more reasons may be added in the future, current possible reasons: SoftLimit. |  [optional] |
|**returnCutoffTime** | **OffsetDateTime** | The last time when a return will be accepted using the return Check Payment endpoint. |  [optional] |
|**additionalVerificationStatus** | **String** | Optional. One of &#39;Required&#39;, &#39;NotRequired&#39; or &#39;Approved&#39;, when Requires an additional verification will be required, see Approve Additional Verification. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**deliveryStatus** | **String** | One of Mailed, InLocalArea, Delivered, Rerouted, ReturnedToSender. Available once check status is InDelivery |  [optional] |
|**trackedAt** | **OffsetDateTime** | The date of the last delivery status update. |  [optional] |
|**postalCode** | **String** | The location of the last delivery status update. |  [optional] |
|**expirationDate** | **LocalDate** | check expiration date, formatted YYYY-MM--DD, e.g \&quot;2020-05-01\&quot;. |  [optional] |
|**expectedDelivery** | **LocalDate** | check expected delivery date, formatted YYYY-MM--DD, e.g \&quot;2020-05-01\&quot;. |  [optional] |
|**sendAt** | **OffsetDateTime** | The date and time in which the check is to be sent. |  [optional] |
|**counterparty** | [**CheckPaymentCounterpartyType**](CheckPaymentCounterpartyType.md) | The receiving party of the check. |  |
|**memo** | **String** | Text included on the memo line of the check. |  [optional] |



