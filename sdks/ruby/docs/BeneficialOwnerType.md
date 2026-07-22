# UnitFinanceSdk::BeneficialOwnerType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | One of Approved, Denied or PendingReview. |  |
| **full_name** | [**FullNameType**](FullNameType.md) | Full name of the beneficial owner. |  |
| **ssn** | **String** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. | [optional] |
| **passport** | **String** | Passport of the beneficial owner. One of ssn or passport is required. | [optional] |
| **nationality** | **String** | Always when Passport is populated and optional when SSN is populated. Two letters representing the beneficial owner&#39;s nationality. | [optional] |
| **date_of_birth** | **Date** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**AddressType**](AddressType.md) | The beneficial owner&#39;s address. |  |
| **phone** | [**PhoneType**](PhoneType.md) | The beneficial owner&#39;s phone number. |  |
| **email** | **String** | The beneficial owner&#39;s email address. |  |
| **percentage** | **Integer** | The percentage of ownership of the beneficial owner. | [optional] |
| **occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the beneficial owner. | [optional] |
| **annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the beneficial owner. | [optional] |
| **source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the beneficial owner. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::BeneficialOwnerType.new(
  status: null,
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

