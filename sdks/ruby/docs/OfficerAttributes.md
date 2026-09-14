# UnitFinanceSdk::OfficerAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | One of Approved, Denied or PendingReview. |  |
| **full_name** | [**FullNameType**](FullNameType.md) | Full name of the officer. |  |
| **title** | **String** | Title of the officer. One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. |  |
| **ssn** | **String** | SSN (or ITIN) of the officer (numbers only). Either an ssn or passport is required. | [optional] |
| **passport** | **String** | Passport number of the officer. Valid only for non-US persons. Either an ssn or passport number is required. | [optional] |
| **nationality** | **String** | Required if a passport is used as the main ID and optional when ssn is used. Two letters representing the officer&#39;s nationality. (e.g. \&quot;US\&quot;). | [optional] |
| **date_of_birth** | **Date** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**AddressType**](AddressType.md) | The officer&#39;s address. |  |
| **phone** | [**PhoneType**](PhoneType.md) | The officer&#39;s phone number. |  |
| **email** | **String** | The officer&#39;s email address. |  |
| **occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the officer. | [optional] |
| **annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the officer. | [optional] |
| **source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the officer. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::OfficerAttributes.new(
  status: null,
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

