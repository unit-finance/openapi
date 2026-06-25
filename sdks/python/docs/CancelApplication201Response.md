# CancelApplication201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List200ResponseDataInner**](List200ResponseDataInner.md) |  | 
**included** | [**List[ApplicationDocument]**](ApplicationDocument.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.cancel_application201_response import CancelApplication201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CancelApplication201Response from a JSON string
cancel_application201_response_instance = CancelApplication201Response.from_json(json)
# print the JSON string representation of the object
print(CancelApplication201Response.to_json())

# convert the object into a dict
cancel_application201_response_dict = cancel_application201_response_instance.to_dict()
# create an instance of CancelApplication201Response from a dict
cancel_application201_response_from_dict = CancelApplication201Response.from_dict(cancel_application201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


