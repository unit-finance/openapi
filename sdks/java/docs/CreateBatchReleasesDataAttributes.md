

# CreateBatchReleasesDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **Integer** | The amount (in cents) to move from the batch account to the receiver account. |  |
|**description** | **String** | Description of the payment (maximum of 50 characters). |  |
|**senderName** | **String** | Sender name for the payment (maximum of 255 characters). |  |
|**senderAddress** | [**AddressType**](AddressType.md) | Sender address for the payment. |  |
|**senderAccountNumber** | **String** | A unique identifier for the sender of the payment (maximum of 17 characters). As an example, when the payment comes from a card processor, this identifier may be set to the BIN followed by the last four digits of the card used. |  |
|**tags** | **Map&lt;String, Object&gt;** | Optional. See Tags. Tags will be passed to the related Release Transaction. |  [optional] |
|**idempotencyKey** | **String** | Optional, but strongly recommended. See Idempotency. |  [optional] |



