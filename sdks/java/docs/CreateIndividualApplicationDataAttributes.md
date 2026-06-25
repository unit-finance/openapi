

# CreateIndividualApplicationDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**ssn** | **String** | SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. It is optional to provide only last 4 SSN digits. |  [optional] |
|**passport** | **String** | Passport number of the individual. Valid only for non-US persons. Either an ssn or passport number is required. |  [optional] |
|**nationality** | **String** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). |  [optional] |
|**fullName** | [**FullName**](FullName.md) | Full name of the individual. |  |
|**dateOfBirth** | **String** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
|**address** | [**Address**](Address.md) | Address of the individual. Must be a US address. |  |
|**phone** | [**Phone**](Phone.md) | Phone number of the individual. |  |
|**email** | **String** | Email address of the individual. |  |
|**evaluationParams** | **String** | Optional. Evaluation Params for this entity. |  [optional] |
|**occupation** | **Occupation** | Occupation of the individual. |  |
|**annualIncome** | **AnnualIncome** | Required if nationality is not US. Annual income of the individual. |  |
|**sourceOfIncome** | **SourceOfIncome** | Required if nationality is not US. Source of income of the individual. |  |
|**ip** | **String** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). |  [optional] |
|**idempotencyKey** | **String** | Optional. See Idempotency. |  [optional] |
|**deviceFingerprints** | [**List&lt;DeviceFingerprint&gt;**](DeviceFingerprint.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). |  [optional] |
|**jwtSubject** | **String** | Optional. See this section for more information. |  [optional] |
|**banks** | **List&lt;String&gt;** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org&#39;s default bank (visible via Org Settings in the Dashboard). |  [optional] |



