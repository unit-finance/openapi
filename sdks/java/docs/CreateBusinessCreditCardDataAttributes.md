

# CreateBusinessCreditCardDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**fullName** | [**FullNameType**](FullNameType.md) | Full name of the card holder. |  |
|**dateOfBirth** | **LocalDate** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). |  |
|**address** | [**AddressType**](AddressType.md) | Address of the card holder. |  |
|**shippingAddress** | [**AddressType**](AddressType.md) | Address to ship the card to. If not specified, card holder address is used. |  [optional] |
|**phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. |  |
|**email** | **String** | Email address of the card holder. |  |
|**design** | **String** | You may omit if you only have one card design. Please contact Unit if you need multiple card designs. |  [optional] |
|**additionalEmbossedText** | **String** | Optional, up to 21 characters. Use for a second cardholder name, company name, or other data to be embossed on a card. |  [optional] |
|**idempotencyKey** | **String** | See Idempotency. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**limits** | **Map&lt;String, Object&gt;** | See Limits (cents). |  [optional] |
|**printOnlyBusinessName** | **Boolean** | Optional, default is false. Print the business name on the card instead of the card holder&#39;s name. |  [optional] |
|**expiryDate** | **String** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. |  [optional] |
|**ssn** | **String** | Optional. SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. It is optional to provide only last 4 SSN digits. |  [optional] |
|**passport** | **String** | Passport number of the individual. Valid only for non-US persons. |  [optional] |
|**nationality** | **String** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). |  [optional] |



