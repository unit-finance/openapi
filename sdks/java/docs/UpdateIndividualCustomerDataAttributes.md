

# UpdateIndividualCustomerDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**address** | [**AddressType**](AddressType.md) | Address of the individual. To modify or add specify the new address. |  [optional] |
|**phone** | [**PhoneType**](PhoneType.md) | Phone of the individual. To modify or add specify the new phone number. |  [optional] |
|**email** | **String** | Email address of the individual. To modify or add specify the new email address. |  [optional] |
|**dba** | **String** | If the individual is a sole proprietor who is doing business under a different name. To modify or add specify the new dba name. |  [optional] |
|**numberOfEmployees** | **BusinessNumberOfEmployeesType** | Number of employees if the customer is a sole proprietor. |  [optional] |
|**businessVertical** | **BusinessVerticalType** | Business vertical if the customer is a sole proprietor. |  [optional] |
|**occupation** | **OccupationType** | Occupation of the individual. |  [optional] |
|**annualIncome** | **AnnualIncomeType** | Annual income of the individual. |  [optional] |
|**annualRevenue** | **AnnualRevenueType** | Annual revenue if the customer is a sole proprietor. |  [optional] |
|**website** | **String** | Business&#39;s website if the customer is a sole proprietor. |  [optional] |
|**sourceOfIncome** | **SourceOfIncomeType** | Source of income of the individual. |  [optional] |
|**authorizedUsers** | [**List&lt;AuthorizedUserType&gt;**](AuthorizedUserType.md) | Array of authorized users. The provided array items will replace the existing ones. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Updating Tags. |  [optional] |
|**jwtSubject** | **String** | See this section for more information. |  [optional] |



