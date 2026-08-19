

# OfficerType


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | **String** | One of Approved, Denied or PendingReview. |  |
|**fullName** | [**FullNameType**](FullNameType.md) | Full name of the officer. |  |
|**title** | **String** | One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. |  |
|**ssn** | **String** | SSN of the officer (numbers only). One of ssn or passport is required. |  [optional] |
|**passport** | **String** | Passport of the officer. One of ssn or passport is required. |  [optional] |
|**nationality** | **String** | Always when Passport is populated and optional when SSN is populated. Two letters representing the officer&#39;s nationality. |  [optional] |
|**dateOfBirth** | **LocalDate** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
|**address** | [**AddressType**](AddressType.md) | The officer&#39;s address. |  |
|**phone** | [**PhoneType**](PhoneType.md) | The officer&#39;s phone number. |  |
|**email** | **String** | The officer&#39;s email address. |  |
|**idTheftScore** | **BigDecimal** | Optional. Score (0-1000) for ID theft verification, &gt;900 is auto rejected as default (threshold is configurable). |  [optional] |
|**occupation** | **OccupationType** | Optional. Occupation of the officer. |  [optional] |
|**annualIncome** | **AnnualIncomeType** | Optional. Annual income of the officer. |  [optional] |
|**sourceOfIncome** | **SourceOfIncomeType** | Optional. Source of income of the officer. |  [optional] |



