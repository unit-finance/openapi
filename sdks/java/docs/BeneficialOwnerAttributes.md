

# BeneficialOwnerAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | **String** | One of Approved, Denied or PendingReview. |  |
|**fullName** | [**FullName**](FullName.md) | Full name of the beneficial owner. |  |
|**ssn** | **String** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. |  [optional] |
|**passport** | **String** | Passport of the beneficial owner. One of ssn or passport is required. |  [optional] |
|**nationality** | **String** | Always when Passport is populated and optional when SSN is populated. Two letters representing the beneficial owner&#39;s nationality. |  [optional] |
|**dateOfBirth** | **LocalDate** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
|**address** | [**Address**](Address.md) | The beneficial owner&#39;s address. |  |
|**phone** | [**Phone**](Phone.md) | The beneficial owner&#39;s phone number. |  |
|**email** | **String** | The beneficial owner&#39;s email address. |  |
|**occupation** | **Occupation** | Optional. Occupation of the beneficial owner. |  [optional] |
|**annualIncome** | **AnnualIncome** | Optional. Annual income of the beneficial owner. |  [optional] |
|**sourceOfIncome** | **SourceOfIncome** | Optional. Source of income of the beneficial owner. |  [optional] |



