# ListStatements200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Statement]**](Statement.md) |  | 

## Example

```python
from unit_finance_sdk.models.list_statements200_response import ListStatements200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListStatements200Response from a JSON string
list_statements200_response_instance = ListStatements200Response.from_json(json)
# print the JSON string representation of the object
print(ListStatements200Response.to_json())

# convert the object into a dict
list_statements200_response_dict = list_statements200_response_instance.to_dict()
# create an instance of ListStatements200Response from a dict
list_statements200_response_from_dict = ListStatements200Response.from_dict(list_statements200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


