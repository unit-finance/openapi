

# BusinessVirtualDebitCardAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | The date the resource was updated. |  [optional] |
|**last4Digits** | **String** | Last 4 digits of the debit card. |  |
|**expirationDate** | **String** | Card expiration date, formatted YYYY-MM, e.g \&quot;2020-05\&quot;. |  |
|**ssn** | **String** | SSN of the card holder (numbers only), if specified during card creation. |  [optional] |
|**passport** | **String** | Passport number of the card holder, if specified during card creation. |  [optional] |
|**nationality** | **String** | Required if a passport is used as the main ID and optional when ssn is used. Two letters representing the card holder nationality. (e.g. \&quot;US\&quot;). |  [optional] |
|**fullName** | [**FullNameType**](FullNameType.md) | Full name of the card holder. |  |
|**dateOfBirth** | **LocalDate** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). |  |
|**address** | [**AddressType**](AddressType.md) | Address of the card holder. |  |
|**bin** | **String** | 9-digit Bank Identification Number (BIN). |  |
|**phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. |  |
|**email** | **String** | Email address of the card holder. |  |
|**status** | **String** | Status of the card, one of: Active, Inactive, Stolen, Lost, Frozen, ClosedByCustomer, SuspectedFraud. |  |



