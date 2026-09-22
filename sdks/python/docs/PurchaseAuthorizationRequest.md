# PurchaseAuthorizationRequest

`PurchaseAuthorizationRequest` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**PurchaseAuthorizationRequestAttributes**](PurchaseAuthorizationRequestAttributes.md) |  | 
**relationships** | [**PurchaseAuthorizationRequestRelationships**](PurchaseAuthorizationRequestRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.purchase_authorization_request import PurchaseAuthorizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseAuthorizationRequest from a JSON string
purchase_authorization_request_instance = PurchaseAuthorizationRequest.from_json(json)
# print the JSON string representation of the object
print(PurchaseAuthorizationRequest.to_json())

# convert the object into a dict
purchase_authorization_request_dict = purchase_authorization_request_instance.to_dict()
# create an instance of PurchaseAuthorizationRequest from a dict
purchase_authorization_request_from_dict = PurchaseAuthorizationRequest.from_dict(purchase_authorization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


