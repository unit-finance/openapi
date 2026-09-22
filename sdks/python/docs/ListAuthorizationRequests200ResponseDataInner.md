# ListAuthorizationRequests200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**AtmAuthorizationRequestAttributes**](AtmAuthorizationRequestAttributes.md) |  | 
**relationships** | [**AtmAuthorizationRequestRelationships**](AtmAuthorizationRequestRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_authorization_requests200_response_data_inner import ListAuthorizationRequests200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListAuthorizationRequests200ResponseDataInner from a JSON string
list_authorization_requests200_response_data_inner_instance = ListAuthorizationRequests200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListAuthorizationRequests200ResponseDataInner.to_json())

# convert the object into a dict
list_authorization_requests200_response_data_inner_dict = list_authorization_requests200_response_data_inner_instance.to_dict()
# create an instance of ListAuthorizationRequests200ResponseDataInner from a dict
list_authorization_requests200_response_data_inner_from_dict = ListAuthorizationRequests200ResponseDataInner.from_dict(list_authorization_requests200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


