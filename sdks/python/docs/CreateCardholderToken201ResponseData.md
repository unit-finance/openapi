# CreateCardholderToken201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**attributes** | [**CreateCardholderToken201ResponseDataAttributes**](CreateCardholderToken201ResponseDataAttributes.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.create_cardholder_token201_response_data import CreateCardholderToken201ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardholderToken201ResponseData from a JSON string
create_cardholder_token201_response_data_instance = CreateCardholderToken201ResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateCardholderToken201ResponseData.to_json())

# convert the object into a dict
create_cardholder_token201_response_data_dict = create_cardholder_token201_response_data_instance.to_dict()
# create an instance of CreateCardholderToken201ResponseData from a dict
create_cardholder_token201_response_data_from_dict = CreateCardholderToken201ResponseData.from_dict(create_cardholder_token201_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


