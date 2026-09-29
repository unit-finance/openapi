# ListReceivables200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListReceivables200ResponseData**](ListReceivables200ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.list_receivables200_response import ListReceivables200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListReceivables200Response from a JSON string
list_receivables200_response_instance = ListReceivables200Response.from_json(json)
# print the JSON string representation of the object
print(ListReceivables200Response.to_json())

# convert the object into a dict
list_receivables200_response_dict = list_receivables200_response_instance.to_dict()
# create an instance of ListReceivables200Response from a dict
list_receivables200_response_from_dict = ListReceivables200Response.from_dict(list_receivables200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


