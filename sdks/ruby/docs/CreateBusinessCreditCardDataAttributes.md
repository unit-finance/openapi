# UnitFinanceSdk::CreateBusinessCreditCardDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **full_name** | [**FullNameType**](FullNameType.md) | Full name of the card holder. |  |
| **date_of_birth** | **Date** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**AddressType**](AddressType.md) | Address of the card holder. |  |
| **shipping_address** | [**AddressType**](AddressType.md) | Address to ship the card to. If not specified, card holder address is used. | [optional] |
| **phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. |  |
| **email** | **String** | Email address of the card holder. |  |
| **design** | **String** | You may omit if you only have one card design. Please contact Unit if you need multiple card designs. | [optional] |
| **additional_embossed_text** | **String** | Optional, up to 21 characters. Use for a second cardholder name, company name, or other data to be embossed on a card. | [optional] |
| **idempotency_key** | **String** | See Idempotency. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **limits** | **Hash&lt;String, Object&gt;** | See Limits (cents). | [optional] |
| **print_only_business_name** | **Boolean** | Optional, default is false. Print the business name on the card instead of the card holder&#39;s name. | [optional] |
| **expiry_date** | **String** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. | [optional] |
| **ssn** | **String** | Optional. SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. It is optional to provide only last 4 SSN digits. | [optional] |
| **passport** | **String** | Passport number of the individual. Valid only for non-US persons. | [optional] |
| **nationality** | **String** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateBusinessCreditCardDataAttributes.new(
  full_name: null,
  date_of_birth: Fri Aug 10 00:00:00 UTC 2001,
  address: null,
  shipping_address: null,
  phone: null,
  email: richard@piedpiper.com,
  design: null,
  additional_embossed_text: null,
  idempotency_key: 3a1a33be-4e12-4603-9ed0-820922389fb8,
  tags: null,
  limits: {&quot;dailyWithdrawal&quot;:50000,&quot;dailyPurchase&quot;:50000,&quot;monthlyWithdrawal&quot;:500000,&quot;monthlyPurchase&quot;:700000},
  print_only_business_name: null,
  expiry_date: null,
  ssn: null,
  passport: null,
  nationality: null
)
```

