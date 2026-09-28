# ListLendingPrograms200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[LendingProgram]**](LendingProgram.md) | Array of lending-program resources. | 

## Example

```python
from unit_finance_sdk.models.list_lending_programs200_response import ListLendingPrograms200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListLendingPrograms200Response from a JSON string
list_lending_programs200_response_instance = ListLendingPrograms200Response.from_json(json)
# print the JSON string representation of the object
print(ListLendingPrograms200Response.to_json())

# convert the object into a dict
list_lending_programs200_response_dict = list_lending_programs200_response_instance.to_dict()
# create an instance of ListLendingPrograms200Response from a dict
list_lending_programs200_response_from_dict = ListLendingPrograms200Response.from_dict(list_lending_programs200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


