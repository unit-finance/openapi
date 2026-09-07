

# CreateAWirePaymentDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **Integer** | The amount (in cents). |  |
|**description** | **String** | Payment description (maximum of 50 characters), this will show up on statement of the counterparty. |  |
|**counterparty** | [**WireCounterpartyType**](WireCounterpartyType.md) | The party on the other side of the Wire payment. |  |
|**idempotencyKey** | **String** | Optional. See Idempotency. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). |  [optional] |



