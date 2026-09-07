# ListCards200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListCards200ResponseDataInner]**](ListCards200ResponseDataInner.md) |  | 
**included** | [**List[DepositAccount]**](DepositAccount.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_cards200_response import ListCards200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListCards200Response from a JSON string
list_cards200_response_instance = ListCards200Response.from_json(json)
# print the JSON string representation of the object
print(ListCards200Response.to_json())

# convert the object into a dict
list_cards200_response_dict = list_cards200_response_instance.to_dict()
# create an instance of ListCards200Response from a dict
list_cards200_response_from_dict = ListCards200Response.from_dict(list_cards200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


