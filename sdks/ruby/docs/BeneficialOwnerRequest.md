# UnitFinanceSdk::BeneficialOwnerRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **full_name** | [**FullName**](FullName.md) | Full name of the beneficial owner. |  |
| **ssn** | **String** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. | [optional] |
| **passport** | **String** | Passport of the beneficial owner. One of ssn or passport is required. | [optional] |
| **nationality** | **String** | Required when passport is populated. Two letters representing the beneficial owner&#39;s nationality. | [optional] |
| **date_of_birth** | **String** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**Address**](Address.md) | The beneficial owner&#39;s address. |  |
| **phone** | [**Phone**](Phone.md) | The beneficial owner&#39;s phone number. |  |
| **email** | **String** | The beneficial owner&#39;s email address. |  |
| **percentage** | **Integer** | The percentage of ownership of the beneficial owner (between 25 and 100). | [optional] |
| **occupation** | **String** | Optional. Occupation of the beneficial owner. | [optional] |
| **annual_income** | **String** | Optional. Annual income of the beneficial owner. | [optional] |
| **source_of_income** | **String** | Optional. Source of income of the beneficial owner. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::BeneficialOwnerRequest.new(
  full_name: null,
  ssn: null,
  passport: null,
  nationality: null,
  date_of_birth: null,
  address: null,
  phone: null,
  email: null,
  percentage: null,
  occupation: null,
  annual_income: null,
  source_of_income: null
)
```

