

# ACHStopPaymentAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | The date the resource was updated. |  |
|**minAmount** | **Integer** | The amount (cents) above which a received ACH payments will be stopped. |  [optional] |
|**originatorName** | **List&lt;String&gt;** | Array of originator names to look on a payment to stop. |  [optional] |
|**direction** | **String** | Debit only. |  |
|**expiration** | **OffsetDateTime** | Expiration date fo the stop payment |  [optional] |
|**isMultiUse** | **Boolean** |  |  [optional] |
|**description** | **String** |  |  |
|**disableReason** | **String** | One of Expired, Requested or PaymentStopped |  [optional] |
|**idempotencyKey** | **String** | Optional, but **strongly recommended**. See Idempotency. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |



