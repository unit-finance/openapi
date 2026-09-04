

# RealtimeReceivedPaymentAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the received payment was created. Common to all receive payment types. |  |
|**status** | **String** | The status of the Received Payment. One of Pending, Completed, Returned, Rejected, or TimedOut. See Received Payment Statuses. |  |
|**amount** | **Integer** | The amount (cents) of the RTP received payment. |  |
|**description** | **String** | Payment description / remittance information. |  |
|**counterparty** | [**RealTimeCounterpartyType**](RealTimeCounterpartyType.md) | The party on the other end of the transaction. For RTP received payments, this is always the originator (in ISO20022 terminology this is referred to as the Debtor). |  |
|**returnReason** | **String** | Present when status is Returned. See RTP return reasons. |  [optional] |
|**rejectReason** | **String** | Present when status is Rejected. See RTP reject reasons. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |



