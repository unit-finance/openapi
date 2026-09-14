

# UpdateBusinessCustomerDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**address** | [**AddressType**](AddressType.md) | Address of the business. To modify specify the new address. |  [optional] |
|**phone** | [**PhoneType**](PhoneType.md) | Phone of the business. To modify specify the new phone number. |  [optional] |
|**contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. |  [optional] |
|**authorizedUsers** | [**List&lt;AuthorizedUserType&gt;**](AuthorizedUserType.md) | Array of authorized users. The provided array items will replace the existing ones. |  [optional] |
|**dba** | **String** | To modify or add specify the new dba name. |  [optional] |
|**businessVertical** | **BusinessVerticalType** | The business vertical of the business. |  [optional] |
|**numberOfEmployees** | **BusinessNumberOfEmployeesType** | Number of employees of the business. |  [optional] |
|**annualRevenue** | **AnnualRevenueType** | Annual revenue of the business. |  [optional] |
|**cashFlow** | **CashFlowType** | Cash flow of the business. |  [optional] |
|**countriesOfOperation** | **List&lt;String&gt;** | Countries where the business operates. |  [optional] |
|**website** | **String** | Business&#39;s website. |  [optional] |
|**stockSymbol** | **String** | Stock symbol (ticker) of the business. |  [optional] |
|**yearOfIncorporation** | **String** | Year of incorporation of the business. |  [optional] |
|**operatingAddress** | [**AddressType**](AddressType.md) | The operating address of the business. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Updating Tags. |  [optional] |



