# UnitFinanceSdk::BeneficialOwnerAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | One of Approved, Denied or PendingReview. |  |
| **full_name** | [**FullName**](FullName.md) | Full name of the beneficial owner. |  |
| **ssn** | **String** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. | [optional] |
| **passport** | **String** | Passport of the beneficial owner. One of ssn or passport is required. | [optional] |
| **nationality** | **String** | Always when Passport is populated and optional when SSN is populated. Two letters representing the beneficial owner&#39;s nationality. | [optional] |
| **date_of_birth** | **Date** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**Address**](Address.md) | The beneficial owner&#39;s address. |  |
| **phone** | [**Phone**](Phone.md) | The beneficial owner&#39;s phone number. |  |
| **email** | **String** | The beneficial owner&#39;s email address. |  |
| **occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the beneficial owner. | [optional] |
| **annual_income** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the beneficial owner. | [optional] |
| **source_of_income** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the beneficial owner. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::BeneficialOwnerAttributes.new(
  status: null,
  full_name: null,
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

