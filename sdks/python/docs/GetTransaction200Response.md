# GetTransaction200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Transaction**](Transaction.md) |  | 
**included** | [**List[ListTransactions200ResponseIncludedInner]**](ListTransactions200ResponseIncludedInner.md) | Array of resources requested by the include query parameter. | [optional] 

## Example

```python
from unit_finance_sdk.models.get_transaction200_response import GetTransaction200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTransaction200Response from a JSON string
get_transaction200_response_instance = GetTransaction200Response.from_json(json)
# print the JSON string representation of the object
print(GetTransaction200Response.to_json())

# convert the object into a dict
get_transaction200_response_dict = get_transaction200_response_instance.to_dict()
# create an instance of GetTransaction200Response from a dict
get_transaction200_response_from_dict = GetTransaction200Response.from_dict(get_transaction200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


