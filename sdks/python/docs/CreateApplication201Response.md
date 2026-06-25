# CreateApplication201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List200ResponseDataInner**](List200ResponseDataInner.md) |  | 
**included** | [**List[CreateApplication201ResponseIncludedInner]**](CreateApplication201ResponseIncludedInner.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.create_application201_response import CreateApplication201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateApplication201Response from a JSON string
create_application201_response_instance = CreateApplication201Response.from_json(json)
# print the JSON string representation of the object
print(CreateApplication201Response.to_json())

# convert the object into a dict
create_application201_response_dict = create_application201_response_instance.to_dict()
# create an instance of CreateApplication201Response from a dict
create_application201_response_from_dict = CreateApplication201Response.from_dict(create_application201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


