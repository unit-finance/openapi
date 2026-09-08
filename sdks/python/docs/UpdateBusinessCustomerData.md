# UpdateBusinessCustomerData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateBusinessCustomerDataAttributes**](UpdateBusinessCustomerDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_business_customer_data import UpdateBusinessCustomerData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessCustomerData from a JSON string
update_business_customer_data_instance = UpdateBusinessCustomerData.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessCustomerData.to_json())

# convert the object into a dict
update_business_customer_data_dict = update_business_customer_data_instance.to_dict()
# create an instance of UpdateBusinessCustomerData from a dict
update_business_customer_data_from_dict = UpdateBusinessCustomerData.from_dict(update_business_customer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


