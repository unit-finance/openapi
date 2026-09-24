# ListDisputes200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Dispute]**](Dispute.md) | Array of dispute resources. | 

## Example

```python
from unit_finance_sdk.models.list_disputes200_response import ListDisputes200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListDisputes200Response from a JSON string
list_disputes200_response_instance = ListDisputes200Response.from_json(json)
# print the JSON string representation of the object
print(ListDisputes200Response.to_json())

# convert the object into a dict
list_disputes200_response_dict = list_disputes200_response_instance.to_dict()
# create an instance of ListDisputes200Response from a dict
list_disputes200_response_from_dict = ListDisputes200Response.from_dict(list_disputes200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


