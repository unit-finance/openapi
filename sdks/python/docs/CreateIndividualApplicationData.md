# CreateIndividualApplicationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateIndividualApplicationDataAttributes**](CreateIndividualApplicationDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_individual_application_data import CreateIndividualApplicationData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIndividualApplicationData from a JSON string
create_individual_application_data_instance = CreateIndividualApplicationData.from_json(json)
# print the JSON string representation of the object
print(CreateIndividualApplicationData.to_json())

# convert the object into a dict
create_individual_application_data_dict = create_individual_application_data_instance.to_dict()
# create an instance of CreateIndividualApplicationData from a dict
create_individual_application_data_from_dict = CreateIndividualApplicationData.from_dict(create_individual_application_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


