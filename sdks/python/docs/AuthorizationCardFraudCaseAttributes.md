# AuthorizationCardFraudCaseAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | The status of the card fraud case. Can be one of Created, Active, Closed, Expired. | 
**decision** | **str** | The decision made for the card fraud case. Can be one of Pending, Fraud, NoFraud. | 
**expires_at** | **datetime** | The date the card fraud case expires. | 
**card_activities** | [**List[FraudCaseCardActivityType]**](FraudCaseCardActivityType.md) | The card activities associated with the card fraud case. | 
**updated_at** | **datetime** | The date the resource was last updated. | [optional] 

## Example

```python
from unit_finance_sdk.models.authorization_card_fraud_case_attributes import AuthorizationCardFraudCaseAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCardFraudCaseAttributes from a JSON string
authorization_card_fraud_case_attributes_instance = AuthorizationCardFraudCaseAttributes.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCardFraudCaseAttributes.to_json())

# convert the object into a dict
authorization_card_fraud_case_attributes_dict = authorization_card_fraud_case_attributes_instance.to_dict()
# create an instance of AuthorizationCardFraudCaseAttributes from a dict
authorization_card_fraud_case_attributes_from_dict = AuthorizationCardFraudCaseAttributes.from_dict(authorization_card_fraud_case_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


