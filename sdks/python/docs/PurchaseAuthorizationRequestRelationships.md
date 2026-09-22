# PurchaseAuthorizationRequestRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**card** | [**Relationship**](Relationship.md) |  | [optional] 
**funding_account** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.purchase_authorization_request_relationships import PurchaseAuthorizationRequestRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseAuthorizationRequestRelationships from a JSON string
purchase_authorization_request_relationships_instance = PurchaseAuthorizationRequestRelationships.from_json(json)
# print the JSON string representation of the object
print(PurchaseAuthorizationRequestRelationships.to_json())

# convert the object into a dict
purchase_authorization_request_relationships_dict = purchase_authorization_request_relationships_instance.to_dict()
# create an instance of PurchaseAuthorizationRequestRelationships from a dict
purchase_authorization_request_relationships_from_dict = PurchaseAuthorizationRequestRelationships.from_dict(purchase_authorization_request_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


