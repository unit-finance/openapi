# CreateBusinessApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the business. | 
**dba** | **str** | Optional. \&quot;Doing business as\&quot;. | [optional] 
**address** | [**AddressType**](AddressType.md) | Address of the business. Must be a US address | 
**phone** | [**PhoneType**](PhoneType.md) | Phone number of the business. | 
**state_of_incorporation** | **str** | Two letters representing a US state. | 
**ein** | **str** | Business EIN (numbers only). | 
**entity_type** | **str** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the sandbox also accepts Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid rejecting values the live API accepts. | 
**website** | **str** | A Valid website Url. Providing a null value is indicative of the business customer attesting that they do not have a website. | 
**contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. This person is the one that will have access to the account. | 
**officer** | [**OfficerRequestType**](OfficerRequestType.md) | Officer representing the business (must be the CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member). To onboard a business successfully, you must provide the officer&#39;s personal details. | 
**beneficial_owners** | [**List[BeneficialOwnerRequestType]**](BeneficialOwnerRequestType.md) | Array of beneficial owners in the business. Beneficial owners are all people that, directly or indirectly, own 25% or more of the business. To onboard a business successfully, you must provide each beneficial owner&#39;s personal details. If the business has no beneficial owners, the array should be empty. | 
**annual_revenue** | [**BusinessAnnualRevenueType**](BusinessAnnualRevenueType.md) | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Annual revenue of the business. | 
**number_of_employees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Number of employees of the business. | 
**cash_flow** | [**CashFlowType**](CashFlowType.md) | Required if any of the officer / BeneficialOwner of the business have a non US nationality. Cash flow of the business. | 
**year_of_incorporation** | **str** | Required. Year of incorporation of the business as a 4-digit year string (e.g., \&quot;2014\&quot;). | 
**countries_of_operation** | **List[str]** | Required if any of the officer / BeneficialOwner of the business have a non US nationality. An array of two letter codes representing the countries of operation of the business. | 
**stock_symbol** | **str** | Optional. The stock symbol (ticker) of the business. | [optional] 
**business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. | 
**ip** | **str** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 
**device_fingerprints** | [**List[DeviceFingerprintType]**](DeviceFingerprintType.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). | [optional] 
**banks** | **List[str]** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org&#39;s default bank (visible via Org Settings in the Dashboard). | [optional] 
**requested_products** | [**List[RequestedProductType]**](RequestedProductType.md) | Optional. The product being applied for. Contact Unit to enable BillPay and Capital products. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_business_application_data_attributes import CreateBusinessApplicationDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessApplicationDataAttributes from a JSON string
create_business_application_data_attributes_instance = CreateBusinessApplicationDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessApplicationDataAttributes.to_json())

# convert the object into a dict
create_business_application_data_attributes_dict = create_business_application_data_attributes_instance.to_dict()
# create an instance of CreateBusinessApplicationDataAttributes from a dict
create_business_application_data_attributes_from_dict = CreateBusinessApplicationDataAttributes.from_dict(create_business_application_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


