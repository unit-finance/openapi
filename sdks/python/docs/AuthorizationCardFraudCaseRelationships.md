# AuthorizationCardFraudCaseRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**Relationship**](Relationship.md) |  | [optional] 
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**transaction** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.authorization_card_fraud_case_relationships import AuthorizationCardFraudCaseRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCardFraudCaseRelationships from a JSON string
authorization_card_fraud_case_relationships_instance = AuthorizationCardFraudCaseRelationships.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCardFraudCaseRelationships.to_json())

# convert the object into a dict
authorization_card_fraud_case_relationships_dict = authorization_card_fraud_case_relationships_instance.to_dict()
# create an instance of AuthorizationCardFraudCaseRelationships from a dict
authorization_card_fraud_case_relationships_from_dict = AuthorizationCardFraudCaseRelationships.from_dict(authorization_card_fraud_case_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


