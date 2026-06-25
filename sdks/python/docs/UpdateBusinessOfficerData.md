# UpdateBusinessOfficerData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateBusinessOfficerDataAttributes**](UpdateBusinessOfficerDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_business_officer_data import UpdateBusinessOfficerData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessOfficerData from a JSON string
update_business_officer_data_instance = UpdateBusinessOfficerData.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessOfficerData.to_json())

# convert the object into a dict
update_business_officer_data_dict = update_business_officer_data_instance.to_dict()
# create an instance of UpdateBusinessOfficerData from a dict
update_business_officer_data_from_dict = UpdateBusinessOfficerData.from_dict(update_business_officer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


