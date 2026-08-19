# UpdateBusinessApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | See Updating Tags. | 
**annual_revenue** | [**BusinessAnnualRevenue**](BusinessAnnualRevenue.md) | Optional. Annual revenue of the business. | [optional] 
**number_of_employees** | [**BusinessNumberOfEmployees**](BusinessNumberOfEmployees.md) | Optional. Number of employees of the business. | [optional] 
**cash_flow** | [**CashFlow**](CashFlow.md) | Optional. Cash flow of the business. | [optional] 
**year_of_incorporation** | **str** | Optional. Year of incorporation of the business. | [optional] 
**countries_of_operation** | **List[str]** | Optional. An array of two letter codes representing the countries of operation of the business. | [optional] 
**stock_symbol** | **str** | Optional. The stock symbol (ticker) of the business. | [optional] 
**website** | **str** | Optional. A Valid website Url. | [optional] 
**business_vertical** | [**BusinessVertical**](BusinessVertical.md) | Optional. The business vertical of the business. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_business_application_data_attributes import UpdateBusinessApplicationDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessApplicationDataAttributes from a JSON string
update_business_application_data_attributes_instance = UpdateBusinessApplicationDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessApplicationDataAttributes.to_json())

# convert the object into a dict
update_business_application_data_attributes_dict = update_business_application_data_attributes_instance.to_dict()
# create an instance of UpdateBusinessApplicationDataAttributes from a dict
update_business_application_data_attributes_from_dict = UpdateBusinessApplicationDataAttributes.from_dict(update_business_application_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


