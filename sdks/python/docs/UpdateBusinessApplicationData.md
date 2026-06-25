# UpdateBusinessApplicationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateBusinessApplicationDataAttributes**](UpdateBusinessApplicationDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_business_application_data import UpdateBusinessApplicationData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessApplicationData from a JSON string
update_business_application_data_instance = UpdateBusinessApplicationData.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessApplicationData.to_json())

# convert the object into a dict
update_business_application_data_dict = update_business_application_data_instance.to_dict()
# create an instance of UpdateBusinessApplicationData from a dict
update_business_application_data_from_dict = UpdateBusinessApplicationData.from_dict(update_business_application_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


