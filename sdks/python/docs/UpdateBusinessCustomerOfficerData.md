# UpdateBusinessCustomerOfficerData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateBusinessCustomerOfficerDataAttributes**](UpdateBusinessCustomerOfficerDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_business_customer_officer_data import UpdateBusinessCustomerOfficerData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessCustomerOfficerData from a JSON string
update_business_customer_officer_data_instance = UpdateBusinessCustomerOfficerData.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessCustomerOfficerData.to_json())

# convert the object into a dict
update_business_customer_officer_data_dict = update_business_customer_officer_data_instance.to_dict()
# create an instance of UpdateBusinessCustomerOfficerData from a dict
update_business_customer_officer_data_from_dict = UpdateBusinessCustomerOfficerData.from_dict(update_business_customer_officer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


