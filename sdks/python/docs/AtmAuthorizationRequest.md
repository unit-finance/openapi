# AtmAuthorizationRequest

`AtmAuthorizationRequest` is a JSON:API resource representing an ATM authorization request. Top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**AtmAuthorizationRequestAttributes**](AtmAuthorizationRequestAttributes.md) |  | 
**relationships** | [**AtmAuthorizationRequestRelationships**](AtmAuthorizationRequestRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.atm_authorization_request import AtmAuthorizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AtmAuthorizationRequest from a JSON string
atm_authorization_request_instance = AtmAuthorizationRequest.from_json(json)
# print the JSON string representation of the object
print(AtmAuthorizationRequest.to_json())

# convert the object into a dict
atm_authorization_request_dict = atm_authorization_request_instance.to_dict()
# create an instance of AtmAuthorizationRequest from a dict
atm_authorization_request_from_dict = AtmAuthorizationRequest.from_dict(atm_authorization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


