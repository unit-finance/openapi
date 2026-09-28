

# CheckPaymentPositivePayAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**status** | **String** | One of Active, Expired, or Cancelled. |  |
|**checkNumber** | **String** | Check number to authorize. |  |
|**payeeName** | **String** | Payee name to add specificity. |  [optional] |
|**amount** | **Integer** | Expected amount in cents. |  |
|**expirationDate** | **LocalDate** | When the authorization expires. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |



