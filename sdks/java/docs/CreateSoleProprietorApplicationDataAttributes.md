

# CreateSoleProprietorApplicationDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**ssn** | **String** | SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. |  [optional] |
|**passport** | **String** | Passport number of the individual. Valid only for non-US persons. Either an ssn or passport number is required. |  [optional] |
|**nationality** | **String** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). |  [optional] |
|**fullName** | [**FullName**](FullName.md) | Full name of the individual. |  |
|**dateOfBirth** | **String** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
|**address** | [**Address**](Address.md) | Address of the individual. Must be a US address. |  |
|**phone** | [**Phone**](Phone.md) | Phone number of the individual. |  |
|**email** | **String** | Email address of the individual. |  |
|**soleProprietorship** | **Boolean** | Set this to true in order to indicate that the individual is a sole proprietor. |  |
|**ein** | **String** | Optional. If the individual is a sole proprietor who has an Employer Identification Number, specify it here. Not all sole proprietors have an EIN, so this attribute is optional, even when soleProprietorship is set to true. |  [optional] |
|**dba** | **String** | Optional. If the individual is a sole proprietor who is doing business under a different name, specify it here. This attribute is optional, even when soleProprietorship is set to true. |  [optional] |
|**evaluationParams** | **String** | Optional. Evaluation Params for this entity. |  [optional] |
|**annualRevenue** | **SoleProprietorAnnualRevenue** | Required if nationality is not US. For sole proprietors, specify the annual revenue here. |  |
|**numberOfEmployees** | **SoleProprietorNumberOfEmployees** | Required if nationality is not US. For sole proprietors, specify the number of employees here. |  |
|**businessVertical** | **BusinessVertical** | For sole proprietors, specify the business vertical here. |  |
|**website** | **String** | A Valid website Url. Providing a null value is indicative of the business customer attesting that they do not have a website. |  |
|**ip** | **String** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). |  [optional] |
|**idempotencyKey** | **String** | Optional. See Idempotency. |  [optional] |
|**deviceFingerprints** | [**List&lt;DeviceFingerprint&gt;**](DeviceFingerprint.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). |  [optional] |
|**jwtSubject** | **String** | Optional. See this section for more information. |  [optional] |
|**banks** | **List&lt;String&gt;** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org&#39;s default bank (visible via Org Settings in the Dashboard). |  [optional] |
|**requestedProducts** | **List&lt;RequestedProduct&gt;** | Optional. The product being applied for. Contact Unit to enable BillPay and Capital products. |  [optional] |



