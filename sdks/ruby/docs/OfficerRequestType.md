# UnitFinanceSdk::OfficerRequestType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **full_name** | [**FullNameType**](FullNameType.md) | Full name of the officer. |  |
| **title** | **String** | One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. |  |
| **ssn** | **String** | SSN of the officer (numbers only). One of ssn or passport is required. | [optional] |
| **passport** | **String** | Passport of the officer. One of ssn or passport is required. | [optional] |
| **nationality** | **String** | Required when passport is populated. Two letters representing the officer&#39;s nationality. | [optional] |
| **date_of_birth** | **String** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**AddressType**](AddressType.md) | The officer&#39;s address. |  |
| **phone** | [**PhoneType**](PhoneType.md) | The officer&#39;s phone number. |  |
| **email** | **String** | The officer&#39;s email address. |  |
| **occupation** | **String** | Optional. Occupation of the officer. | [optional] |
| **annual_income** | **String** | Optional. Annual income of the officer. | [optional] |
| **source_of_income** | **String** | Optional. Source of income of the officer. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::OfficerRequestType.new(
  full_name: null,
  title: null,
  ssn: null,
  passport: null,
  nationality: null,
  date_of_birth: null,
  address: null,
  phone: null,
  email: null,
  occupation: null,
  annual_income: null,
  source_of_income: null
)
```

