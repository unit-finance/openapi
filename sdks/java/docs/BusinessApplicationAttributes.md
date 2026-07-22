

# BusinessApplicationAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | **String** | One of AwaitingDocuments, PendingReview, Approved, Denied or Pending, see Application Statuses. |  |
|**message** | **String** | A message describing the BusinessApplication status. |  |
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | Optional. The date the resource was updated. |  [optional] |
|**name** | **String** | Name of the business. |  |
|**dba** | **String** | Optional. \&quot;Doing business as\&quot;. |  [optional] |
|**address** | [**AddressType**](AddressType.md) | Address of the business. |  |
|**operatingAddress** | [**AddressType**](AddressType.md) | Optional. The operating address of the business. Required when the address is of a registered agent or if any beneficial owner or officer is non-US. |  [optional] |
|**phone** | [**PhoneType**](PhoneType.md) | Phone of the business. |  |
|**stateOfIncorporation** | **String** | Two letters representing a US state. |  |
|**ein** | **String** | Business EIN (numbers only). |  |
|**industry** | **IndustryType** | Optional. Business industry, if specified. |  [optional] |
|**entityType** | **String** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the live API also returns Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid breaking strict client deserialization on undocumented values. |  |
|**website** | **String** | Optional. Business&#39;s website. |  [optional] |
|**contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. |  |
|**officer** | [**OfficerType**](OfficerType.md) | Officer representing the business, must be the CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. The officer would need to go over KYC process and provide documents. |  |
|**beneficialOwners** | [**List&lt;BeneficialOwnerType&gt;**](BeneficialOwnerType.md) |  |  |
|**annualRevenue** | **AnnualRevenueType** | Optional. Annual revenue of the business. |  [optional] |
|**numberOfEmployees** | **NumberOfEmployeesType** | Optional. Number of employees of the business. |  [optional] |
|**cashFlow** | **CashFlowType** | Optional. Cash flow of the business. |  [optional] |
|**yearOfIncorporation** | **String** | Year of incorporation of the business. |  |
|**countriesOfOperation** | **List&lt;String&gt;** | Optional. An array of two letter codes representing the countries of operation of the business. |  [optional] |
|**stockSymbol** | **String** | Optional. The stock symbol (ticker) of the business. |  [optional] |
|**businessVertical** | **BusinessVerticalType** | The business vertical of the business. |  |
|**ip** | **String** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. |  [optional] |
|**archived** | **Boolean** | Indicates whether the application has been archived. Archived applications are read-only and no changes can be made to them. An application becomes archived once the corresponding customer is archived. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |



