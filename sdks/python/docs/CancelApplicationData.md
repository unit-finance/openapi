# CancelApplicationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CancelApplicationDataAttributes**](CancelApplicationDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.cancel_application_data import CancelApplicationData

# TODO update the JSON string below
json = "{}"
# create an instance of CancelApplicationData from a JSON string
cancel_application_data_instance = CancelApplicationData.from_json(json)
# print the JSON string representation of the object
print(CancelApplicationData.to_json())

# convert the object into a dict
cancel_application_data_dict = cancel_application_data_instance.to_dict()
# create an instance of CancelApplicationData from a dict
cancel_application_data_from_dict = CancelApplicationData.from_dict(cancel_application_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


