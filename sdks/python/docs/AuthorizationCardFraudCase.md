# AuthorizationCardFraudCase

`AuthorizationCardFraudCase` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**AuthorizationCardFraudCaseAttributes**](AuthorizationCardFraudCaseAttributes.md) |  | 
**relationships** | [**AuthorizationCardFraudCaseRelationships**](AuthorizationCardFraudCaseRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.authorization_card_fraud_case import AuthorizationCardFraudCase

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCardFraudCase from a JSON string
authorization_card_fraud_case_instance = AuthorizationCardFraudCase.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCardFraudCase.to_json())

# convert the object into a dict
authorization_card_fraud_case_dict = authorization_card_fraud_case_instance.to_dict()
# create an instance of AuthorizationCardFraudCase from a dict
authorization_card_fraud_case_from_dict = AuthorizationCardFraudCase.from_dict(authorization_card_fraud_case_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


