# UpdateBusinessCustomerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressType**](AddressType.md) | Address of the business. To modify specify the new address. | [optional] 
**phone** | [**PhoneType**](PhoneType.md) | Phone of the business. To modify specify the new phone number. | [optional] 
**contact** | [**BusinessContactType**](BusinessContactType.md) | Primary contact of the business. | [optional] 
**authorized_users** | [**List[AuthorizedUserType]**](AuthorizedUserType.md) | Array of authorized users. The provided array items will replace the existing ones. | [optional] 
**dba** | **str** | To modify or add specify the new dba name. | [optional] 
**business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. | [optional] 
**number_of_employees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Number of employees of the business. | [optional] 
**annual_revenue** | [**AnnualRevenueType**](AnnualRevenueType.md) | Annual revenue of the business. | [optional] 
**cash_flow** | [**CashFlowType**](CashFlowType.md) | Cash flow of the business. | [optional] 
**countries_of_operation** | **List[str]** | Countries where the business operates. | [optional] 
**website** | **str** | Business&#39;s website. | [optional] 
**stock_symbol** | **str** | Stock symbol (ticker) of the business. | [optional] 
**year_of_incorporation** | **str** | Year of incorporation of the business. | [optional] 
**operating_address** | [**AddressType**](AddressType.md) | The operating address of the business. | [optional] 
**tags** | **Dict[str, object]** | See Updating Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_business_customer_data_attributes import UpdateBusinessCustomerDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessCustomerDataAttributes from a JSON string
update_business_customer_data_attributes_instance = UpdateBusinessCustomerDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessCustomerDataAttributes.to_json())

# convert the object into a dict
update_business_customer_data_attributes_dict = update_business_customer_data_attributes_instance.to_dict()
# create an instance of UpdateBusinessCustomerDataAttributes from a dict
update_business_customer_data_attributes_from_dict = UpdateBusinessCustomerDataAttributes.from_dict(update_business_customer_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


