# ListTransactions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Transaction]**](Transaction.md) | Array of transaction resources. | 
**included** | [**List[ListTransactions200ResponseIncludedInner]**](ListTransactions200ResponseIncludedInner.md) | Array of resources requested by the include query parameter. | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_transactions200_response import ListTransactions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListTransactions200Response from a JSON string
list_transactions200_response_instance = ListTransactions200Response.from_json(json)
# print the JSON string representation of the object
print(ListTransactions200Response.to_json())

# convert the object into a dict
list_transactions200_response_dict = list_transactions200_response_instance.to_dict()
# create an instance of ListTransactions200Response from a dict
list_transactions200_response_from_dict = ListTransactions200Response.from_dict(list_transactions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


