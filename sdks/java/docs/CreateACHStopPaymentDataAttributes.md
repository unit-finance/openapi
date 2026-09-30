

# CreateACHStopPaymentDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**minAmount** | **Integer** | The amount (in cents) above which a payment will be stopped. At least one originatorName or minAmount must be provided. |  [optional] |
|**originatorName** | **List&lt;String&gt;** | The name of the originator of the payment to look for in payments to stop. At least one originatorName or minAmount must be provided. See guide for further details. |  [optional] |
|**direction** | **String** | Debit only. |  |
|**expiration** | **LocalDate** | Date only (e.g. \&quot;2001-08-15\&quot;). |  [optional] |
|**isMultiUse** | **Boolean** | Available only for ACH Stop Payments. False by default. |  [optional] |
|**description** | **String** | Up to 255 characters |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**idempotencyKey** | **String** | Optional, but **strongly recommended**. See Idempotency. |  [optional] |



