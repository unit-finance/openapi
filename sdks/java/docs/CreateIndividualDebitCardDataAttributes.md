

# CreateIndividualDebitCardDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**shippingAddress** | [**AddressType**](AddressType.md) | Address to ship the card to. If not specified, the individual address is used. |  [optional] |
|**design** | **String** | You may omit if you only have one card design. Please contact Unit if you need multiple card designs. |  [optional] |
|**additionalEmbossedText** | **String** | Optional, up to 21 characters. Use for a second cardholder name, company name, or other data to be embossed on a card. |  [optional] |
|**idempotencyKey** | **String** | See Idempotency. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**limits** | **Map&lt;String, Object&gt;** | See Limits (cents). |  [optional] |
|**printOnlyBusinessName** | **Boolean** | Optional, default is false. Print the business name on the card instead of the card holder&#39;s name. Available only for Sole Proprietorship typed customers that have a DBA property. |  [optional] |
|**expiryDate** | **String** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. |  [optional] |



