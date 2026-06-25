

# OfficerRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**fullName** | [**FullName**](FullName.md) | Full name of the officer. |  |
|**title** | **String** | One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. |  |
|**ssn** | **String** | SSN of the officer (numbers only). One of ssn or passport is required. |  [optional] |
|**passport** | **String** | Passport of the officer. One of ssn or passport is required. |  [optional] |
|**nationality** | **String** | Required when passport is populated. Two letters representing the officer&#39;s nationality. |  [optional] |
|**dateOfBirth** | **String** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
|**address** | [**Address**](Address.md) | The officer&#39;s address. |  |
|**phone** | [**Phone**](Phone.md) | The officer&#39;s phone number. |  |
|**email** | **String** | The officer&#39;s email address. |  |
|**occupation** | **String** | Optional. Occupation of the officer. |  [optional] |
|**annualIncome** | **String** | Optional. Annual income of the officer. |  [optional] |
|**sourceOfIncome** | **String** | Optional. Source of income of the officer. |  [optional] |



