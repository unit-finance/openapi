# BusinessCustomerAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**name** | **str** | Name of the business. | 
**dba** | **str** | Optional. \&quot;Doing business as\&quot;. | [optional] 
**address** | [**AddressType**](AddressType.md) | Address of the business. | 
**operating_address** | [**AddressType**](AddressType.md) | Optional. The operating address of the business. | [optional] 
**phone** | [**PhoneType**](PhoneType.md) | Phone of the business. | 
**state_of_incorporation** | **str** | Two letters representing a US state. | 
**ein** | **str** | Business EIN (numbers only). | 
**entity_type** | **str** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the live API also returns Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid breaking strict client deserialization on undocumented values. | 
**contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. | 
**annual_revenue** | [**AnnualRevenueType**](AnnualRevenueType.md) | Optional. Annual revenue of the business. | [optional] 
**number_of_employees** | [**NumberOfEmployeesType**](NumberOfEmployeesType.md) | Optional. Number of employees of the business. | [optional] 
**business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | Optional. Business vertical of the business. | [optional] 
**cash_flow** | [**CashFlowType**](CashFlowType.md) | Optional. Cash flow of the business. | [optional] 
**countries_of_operation** | **List[str]** | Optional. Countries where the business operates. | [optional] 
**website** | **str** | Optional. Business&#39;s website. | [optional] 
**stock_symbol** | **str** | Optional. The stock symbol (ticker) of the business. | [optional] 
**year_of_incorporation** | **str** | Optional. Year of incorporation of the business. | [optional] 
**authorized_users** | [**List[AuthorizedUserType]**](AuthorizedUserType.md) | Array of authorized users. An authorized user is someone who can participate in the One Time Password (OTP) authentication process. | 
**status** | **str** | Status of the customer, either Active or Archived. You can&#39;t do any write operations on an Archived customer. | 
**eligible_products** | [**List[ProductType]**](ProductType.md) | Optional. The products that the customer is eligible for. | [optional] 
**archive_reason** | **str** | Optional, only if the customer status is Archived. The reason the customer was archived, can be one of ByBank, Inactive, FraudACHActivity, FraudCardActivity, FraudCheckActivity, FraudApplicationHistory, FraudAccountActivity, FraudClientIdentified, FraudLinkedToFraudulentCustomer. | [optional] 
**tags** | **Dict[str, object]** | See Tags. Inherited from the application tags (see Tag Inheritance). | 

## Example

```python
from unit_finance_sdk.models.business_customer_attributes import BusinessCustomerAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCustomerAttributes from a JSON string
business_customer_attributes_instance = BusinessCustomerAttributes.from_json(json)
# print the JSON string representation of the object
print(BusinessCustomerAttributes.to_json())

# convert the object into a dict
business_customer_attributes_dict = business_customer_attributes_instance.to_dict()
# create an instance of BusinessCustomerAttributes from a dict
business_customer_attributes_from_dict = BusinessCustomerAttributes.from_dict(business_customer_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


