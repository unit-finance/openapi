

# CreateCheckPaymentPositivePayDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**checkNumber** | **String** | Check number to authorize. |  |
|**amount** | **Integer** | Expected amount in cents. Must match within 1$ tolerance. |  |
|**payeeName** | **String** | Payee name to add specificity. |  [optional] |
|**expirationDate** | **LocalDate** | When the authorization expires. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). |  [optional] |



