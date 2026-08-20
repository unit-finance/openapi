

# WirePaymentAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**status** | **String** | Either Pending, Returned, Sent, Canceled or Rejected (see reason for details). |  |
|**reason** | **String** | Optional. More information about the status. |  [optional] |
|**direction** | **String** | The direction in which the funds flow (Credit only). |  |
|**description** | **String** | Payment description (maximum of 50 characters), this will show up on statement of the counterparty. |  |
|**counterparty** | [**WireCounterpartyType**](WireCounterpartyType.md) | The beneficiary party on the other end of the payment. |  |
|**amount** | **Integer** | The amount (cents) of the payment. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |
|**imadOmad** | **Map&lt;String, Object&gt;** | (Conditional) IMAD/OMAD - Input/Output Message Accountability Data. It&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. |  [optional] |



