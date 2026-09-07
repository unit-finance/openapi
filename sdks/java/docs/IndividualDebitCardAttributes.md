

# IndividualDebitCardAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | The date the resource was updated. |  [optional] |
|**last4Digits** | **String** | Last 4 digits of the debit card. |  |
|**expirationDate** | **String** | Card expiration date, formatted YYYY-MM, e.g \&quot;2020-05\&quot;. |  |
|**shippingAddress** | [**AddressType**](AddressType.md) | Shipping address, if specified. |  [optional] |
|**bin** | **String** | 9-digit Bank Identification Number (BIN). |  |
|**status** | **String** | Status of the card, one of: Active, Inactive, Stolen, Lost, Frozen, ClosedByCustomer, SuspectedFraud. |  |
|**design** | **String** | Card design, if specified. |  [optional] |



