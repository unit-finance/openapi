

# BusinessCustomerAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**name** | **String** | Name of the business. |  |
|**dba** | **String** | Optional. \&quot;Doing business as\&quot;. |  [optional] |
|**address** | [**AddressType**](AddressType.md) | Address of the business. |  |
|**operatingAddress** | [**AddressType**](AddressType.md) | Optional. The operating address of the business. |  [optional] |
|**phone** | [**PhoneType**](PhoneType.md) | Phone of the business. |  |
|**stateOfIncorporation** | **String** | Two letters representing a US state. |  |
|**ein** | **String** | Business EIN (numbers only). |  |
|**entityType** | **String** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the live API also returns Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid breaking strict client deserialization on undocumented values. |  |
|**contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. |  |
|**annualRevenue** | **AnnualRevenueType** | Optional. Annual revenue of the business. |  [optional] |
|**numberOfEmployees** | **NumberOfEmployeesType** | Optional. Number of employees of the business. |  [optional] |
|**businessVertical** | **BusinessVerticalType** | Optional. Business vertical of the business. |  [optional] |
|**cashFlow** | **CashFlowType** | Optional. Cash flow of the business. |  [optional] |
|**countriesOfOperation** | **List&lt;String&gt;** | Optional. Countries where the business operates. |  [optional] |
|**website** | **String** | Optional. Business&#39;s website. |  [optional] |
|**stockSymbol** | **String** | Optional. The stock symbol (ticker) of the business. |  [optional] |
|**yearOfIncorporation** | **String** | Optional. Year of incorporation of the business. |  [optional] |
|**authorizedUsers** | [**List&lt;AuthorizedUserType&gt;**](AuthorizedUserType.md) | Array of authorized users. An authorized user is someone who can participate in the One Time Password (OTP) authentication process. |  |
|**status** | **String** | Status of the customer, either Active or Archived. You can&#39;t do any write operations on an Archived customer. |  |
|**eligibleProducts** | **List&lt;ProductType&gt;** | Optional. The products that the customer is eligible for. |  [optional] |
|**archiveReason** | **String** | Optional, only if the customer status is Archived. The reason the customer was archived, can be one of ByBank, Inactive, FraudACHActivity, FraudCardActivity, FraudCheckActivity, FraudApplicationHistory, FraudAccountActivity, FraudClientIdentified, FraudLinkedToFraudulentCustomer. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. Inherited from the application tags (see Tag Inheritance). |  |



