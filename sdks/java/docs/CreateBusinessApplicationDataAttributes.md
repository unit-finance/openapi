

# CreateBusinessApplicationDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | Name of the business. |  |
|**dba** | **String** | Optional. \&quot;Doing business as\&quot;. |  [optional] |
|**address** | [**Address**](Address.md) | Address of the business. Must be a US address |  |
|**phone** | [**Phone**](Phone.md) | Phone number of the business. |  |
|**stateOfIncorporation** | **String** | Two letters representing a US state. |  |
|**ein** | **String** | Business EIN (numbers only). |  |
|**entityType** | **String** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the sandbox also accepts Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid rejecting values the live API accepts. |  |
|**website** | **String** | A Valid website Url. Providing a null value is indicative of the business customer attesting that they do not have a website. |  |
|**contact** | [**BusinessContact**](BusinessContact.md) | Primary contact of the business. This person is the one that will have access to the account. |  |
|**officer** | [**OfficerRequest**](OfficerRequest.md) | Officer representing the business (must be the CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member). To onboard a business successfully, you must provide the officer&#39;s personal details. |  |
|**beneficialOwners** | [**List&lt;BeneficialOwnerRequest&gt;**](BeneficialOwnerRequest.md) | Array of beneficial owners in the business. Beneficial owners are all people that, directly or indirectly, own 25% or more of the business. To onboard a business successfully, you must provide each beneficial owner&#39;s personal details. If the business has no beneficial owners, the array should be empty. |  |
|**annualRevenue** | **BusinessAnnualRevenue** | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Annual revenue of the business. |  |
|**numberOfEmployees** | **BusinessNumberOfEmployees** | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Number of employees of the business. |  |
|**cashFlow** | **CashFlow** | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Cash flow of the business. |  |
|**yearOfIncorporation** | **String** | Required. Year of incorporation of the business as a 4-digit year string (e.g., \&quot;2014\&quot;). |  |
|**countriesOfOperation** | **List&lt;String&gt;** | Required if any of the officer / BeneficialOwner of the business have a non US nationality. An array of two letter codes representing the countries of operation of the business. |  |
|**stockSymbol** | **String** | Optional. The stock symbol (ticker) of the business. |  [optional] |
|**businessVertical** | **BusinessVertical** | The business vertical of the business. |  |
|**ip** | **String** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). |  [optional] |
|**idempotencyKey** | **String** | Optional. See Idempotency. |  [optional] |
|**deviceFingerprints** | [**List&lt;DeviceFingerprint&gt;**](DeviceFingerprint.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). |  [optional] |
|**banks** | **List&lt;String&gt;** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org&#39;s default bank (visible via Org Settings in the Dashboard). |  [optional] |
|**requestedProducts** | **List&lt;RequestedProduct&gt;** | Optional. The product being applied for. Contact Unit to enable BillPay and Capital products. |  [optional] |



