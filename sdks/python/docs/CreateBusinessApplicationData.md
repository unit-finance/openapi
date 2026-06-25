# CreateBusinessApplicationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateBusinessApplicationDataAttributes**](CreateBusinessApplicationDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_business_application_data import CreateBusinessApplicationData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessApplicationData from a JSON string
create_business_application_data_instance = CreateBusinessApplicationData.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessApplicationData.to_json())

# convert the object into a dict
create_business_application_data_dict = create_business_application_data_instance.to_dict()
# create an instance of CreateBusinessApplicationData from a dict
create_business_application_data_from_dict = CreateBusinessApplicationData.from_dict(create_business_application_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


