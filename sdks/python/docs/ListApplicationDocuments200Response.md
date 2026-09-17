# ListApplicationDocuments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ApplicationDocument]**](ApplicationDocument.md) |  | 

## Example

```python
from unit_finance_sdk.models.list_application_documents200_response import ListApplicationDocuments200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListApplicationDocuments200Response from a JSON string
list_application_documents200_response_instance = ListApplicationDocuments200Response.from_json(json)
# print the JSON string representation of the object
print(ListApplicationDocuments200Response.to_json())

# convert the object into a dict
list_application_documents200_response_dict = list_application_documents200_response_instance.to_dict()
# create an instance of ListApplicationDocuments200Response from a dict
list_application_documents200_response_from_dict = ListApplicationDocuments200Response.from_dict(list_application_documents200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


