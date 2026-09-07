

# BeneficialOwnerType


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | **String** | One of Approved, Denied or PendingReview. |  |
|**fullName** | [**FullNameType**](FullNameType.md) | Full name of the beneficial owner. |  |
|**ssn** | **String** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. |  [optional] |
|**passport** | **String** | Passport of the beneficial owner. One of ssn or passport is required. |  [optional] |
|**nationality** | **String** | Always when Passport is populated and optional when SSN is populated. Two letters representing the beneficial owner&#39;s nationality. |  [optional] |
|**dateOfBirth** | **LocalDate** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
|**address** | [**AddressType**](AddressType.md) | The beneficial owner&#39;s address. |  |
|**phone** | [**PhoneType**](PhoneType.md) | The beneficial owner&#39;s phone number. |  |
|**email** | **String** | The beneficial owner&#39;s email address. |  |
|**percentage** | **Integer** | The percentage of ownership of the beneficial owner. |  [optional] |
|**occupation** | **OccupationType** | Optional. Occupation of the beneficial owner. |  [optional] |
|**annualIncome** | **AnnualIncomeType** | Optional. Annual income of the beneficial owner. |  [optional] |
|**sourceOfIncome** | **SourceOfIncomeType** | Optional. Source of income of the beneficial owner. |  [optional] |



