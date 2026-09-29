

# CreateReceivedACHDebitPositivePayDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**originatorName** | **String** | Name of the ACH Received Payment originator. Required if originatorEntityId is not provided. |  |
|**originatorEntityId** | **String** | Entity ID of the ACH Received Payment originator. Required if originatorName is not provided. |  |
|**amount** | **Integer** | Maximum allowed debit amount in cents. Decisioning uses this as a maximum. |  [optional] |
|**expirationDate** | **LocalDate** | When the authorization expires. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). |  [optional] |



