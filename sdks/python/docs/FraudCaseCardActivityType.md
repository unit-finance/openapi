# FraudCaseCardActivityType

Represents a card activity that is part of a TransactionCardFraudCase or AuthorizationCardFraudCase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the fraud case card activity. | 
**created_at** | **datetime** | The date the activity was created. | 
**activity_type** | **str** | The type of the activity. Can be either Authorization or Transaction. | 
**card_activity_created_at** | **datetime** | The creation date of the original Authorization or Transaction the activity was created upon. | 
**card_activity** | **str** | The id of the original Authorization or Transaction of the activity. | 
**location** | **str** | The location in which the activity occurred. | 
**merchant** | **str** | The name of the merchant of the activity. | 
**amount** | **int** | The amount (in cents) of the activity. | 
**decision** | **str** | The decision made for the activity. Can be one of Pending, Fraud, NoFraud. | 
**updated_at** | **datetime** | The date the activity was last updated. | 

## Example

```python
from unit_finance_sdk.models.fraud_case_card_activity_type import FraudCaseCardActivityType

# TODO update the JSON string below
json = "{}"
# create an instance of FraudCaseCardActivityType from a JSON string
fraud_case_card_activity_type_instance = FraudCaseCardActivityType.from_json(json)
# print the JSON string representation of the object
print(FraudCaseCardActivityType.to_json())

# convert the object into a dict
fraud_case_card_activity_type_dict = fraud_case_card_activity_type_instance.to_dict()
# create an instance of FraudCaseCardActivityType from a dict
fraud_case_card_activity_type_from_dict = FraudCaseCardActivityType.from_dict(fraud_case_card_activity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


