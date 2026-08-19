# UnitFinanceSdk::Officer

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | One of Approved, Denied or PendingReview. |  |
| **full_name** | [**FullName**](FullName.md) | Full name of the officer. |  |
| **title** | **String** | One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. |  |
| **ssn** | **String** | SSN of the officer (numbers only). One of ssn or passport is required. | [optional] |
| **passport** | **String** | Passport of the officer. One of ssn or passport is required. | [optional] |
| **nationality** | **String** | Always when Passport is populated and optional when SSN is populated. Two letters representing the officer&#39;s nationality. | [optional] |
| **date_of_birth** | **Date** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**Address**](Address.md) | The officer&#39;s address. |  |
| **phone** | [**Phone**](Phone.md) | The officer&#39;s phone number. |  |
| **email** | **String** | The officer&#39;s email address. |  |
| **id_theft_score** | **Float** | Optional. Score (0-1000) for ID theft verification, &gt;900 is auto rejected as default (threshold is configurable). | [optional] |
| **occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the officer. | [optional] |
| **annual_income** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the officer. | [optional] |
| **source_of_income** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the officer. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::Officer.new(
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
  id_theft_score: null,
  occupation: null,
  annual_income: null,
  source_of_income: null
)
```

