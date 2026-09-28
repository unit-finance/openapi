

# ReceivedACHDebitPositivePayAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**status** | **String** | One of Active, Expired, or Cancelled. |  |
|**originatorName** | **String** | Name of the ACH debit originator. |  |
|**originatorEntityId** | **String** | Entity ID of the ACH debit originator. |  |
|**amount** | **Integer** | Maximum allowed debit amount in cents. |  |
|**expirationDate** | **LocalDate** | When the authorization expires. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |



