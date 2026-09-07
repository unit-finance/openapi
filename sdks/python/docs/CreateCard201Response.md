# CreateCard201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCard201ResponseData**](CreateCard201ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_card201_response import CreateCard201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCard201Response from a JSON string
create_card201_response_instance = CreateCard201Response.from_json(json)
# print the JSON string representation of the object
print(CreateCard201Response.to_json())

# convert the object into a dict
create_card201_response_dict = create_card201_response_instance.to_dict()
# create an instance of CreateCard201Response from a dict
create_card201_response_from_dict = CreateCard201Response.from_dict(create_card201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


