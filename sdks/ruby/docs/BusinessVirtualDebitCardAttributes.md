# UnitFinanceSdk::BusinessVirtualDebitCardAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. | [optional] |
| **last4_digits** | **String** | Last 4 digits of the debit card. |  |
| **expiration_date** | **String** | Card expiration date, formatted YYYY-MM, e.g \&quot;2020-05\&quot;. |  |
| **ssn** | **String** | SSN of the card holder (numbers only), if specified during card creation. | [optional] |
| **passport** | **String** | Passport number of the card holder, if specified during card creation. | [optional] |
| **nationality** | **String** | Required if a passport is used as the main ID and optional when ssn is used. Two letters representing the card holder nationality. (e.g. \&quot;US\&quot;). | [optional] |
| **full_name** | [**FullNameType**](FullNameType.md) | Full name of the card holder. |  |
| **date_of_birth** | **Date** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**AddressType**](AddressType.md) | Address of the card holder. |  |
| **bin** | **String** | 9-digit Bank Identification Number (BIN). |  |
| **phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. |  |
| **email** | **String** | Email address of the card holder. |  |
| **status** | **String** | Status of the card, one of: Active, Inactive, Stolen, Lost, Frozen, ClosedByCustomer, SuspectedFraud. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::BusinessVirtualDebitCardAttributes.new(
  created_at: null,
  updated_at: null,
  last4_digits: null,
  expiration_date: null,
  ssn: null,
  passport: null,
  nationality: null,
  full_name: null,
  date_of_birth: null,
  address: null,
  bin: null,
  phone: null,
  email: null,
  status: null
)
```

