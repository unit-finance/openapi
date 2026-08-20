

# ACHReceivedPaymentAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all receive payment types. |  |
|**status** | **String** | The status of the Received Payment. One of Pending, PendingReview, MarkedForReturn, Advanced, Completed or Returned. See ReceivedPayment Statuses. Common to all received payment types. |  |
|**wasAdvanced** | **Boolean** | Will be true if the received payment was or is being Advanced (has or has had the status Advanced). Common to all received payment types. |  |
|**isAdvanceable** | **Boolean** | Will be true if the received payment can be advanced. |  |
|**direction** | **String** | The direction in which the funds flow (either Debit or Credit). |  |
|**completionDate** | **OffsetDateTime** | Shows the date on which the received ACH will be completed (settled or repaid). |  |
|**returnReason** | **String** | Optional. The reason if the received payment is Returned. See ACH return reasons. |  [optional] |
|**amount** | **Integer** | The amount (cents) of the ACH received payment. Common to all received payment types. |  |
|**description** | **String** | ACH description (maximum of 10 characters), also known as Company Entry Description. |  |
|**addenda** | **String** | Optional. Additional transaction description (maximum of 80 characters). |  [optional] |
|**companyName** | **String** | The name by which the originator is known to the receiver. |  |
|**originatorEntityId** | **String** | Optional. A unique identifier by which the originator is formally recognized within the ACH network. |  [optional] |
|**receivingEntityName** | **String** | Optional. The name of the Recipient as it was declared by the originator of the payment. |  [optional] |
|**counterpartyRoutingNumber** | **String** | The routing number of the party that originated the received ACH payment. |  |
|**traceNumber** | **String** | The ACH Trace Number. |  |
|**secCode** | **String** | Optional. The 3-letter ACH Standard Entry Class (SEC) Code (e.g. WEB, CCD, PPD, etc.). |  [optional] |
|**returnCutoffTime** | **OffsetDateTime** | Optional. The last time when a reprocess will be accepted. Will be the next banking day 2pm ET. |  [optional] |
|**canBeReprocessed** | **Boolean** | Optional. If set to true, the Received Payment can be reprocessed until the returnCutoffTime. If empty, the Received Payments can&#39;t be reprocessed. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |



