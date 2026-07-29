# ListAccountHolds200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AccountHold]**](AccountHold.md) |  | 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_account_holds200_response import ListAccountHolds200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccountHolds200Response from a JSON string
list_account_holds200_response_instance = ListAccountHolds200Response.from_json(json)
# print the JSON string representation of the object
print(ListAccountHolds200Response.to_json())

# convert the object into a dict
list_account_holds200_response_dict = list_account_holds200_response_instance.to_dict()
# create an instance of ListAccountHolds200Response from a dict
list_account_holds200_response_from_dict = ListAccountHolds200Response.from_dict(list_account_holds200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


