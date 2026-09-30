# ListRepayments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListRepayments200ResponseDataInner]**](ListRepayments200ResponseDataInner.md) |  | 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_repayments200_response import ListRepayments200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListRepayments200Response from a JSON string
list_repayments200_response_instance = ListRepayments200Response.from_json(json)
# print the JSON string representation of the object
print(ListRepayments200Response.to_json())

# convert the object into a dict
list_repayments200_response_dict = list_repayments200_response_instance.to_dict()
# create an instance of ListRepayments200Response from a dict
list_repayments200_response_from_dict = ListRepayments200Response.from_dict(list_repayments200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


