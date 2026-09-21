# TransactionCardFraudCase

`TransactionCardFraudCase` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**AuthorizationCardFraudCaseAttributes**](AuthorizationCardFraudCaseAttributes.md) |  | 
**relationships** | [**AuthorizationCardFraudCaseRelationships**](AuthorizationCardFraudCaseRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.transaction_card_fraud_case import TransactionCardFraudCase

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionCardFraudCase from a JSON string
transaction_card_fraud_case_instance = TransactionCardFraudCase.from_json(json)
# print the JSON string representation of the object
print(TransactionCardFraudCase.to_json())

# convert the object into a dict
transaction_card_fraud_case_dict = transaction_card_fraud_case_instance.to_dict()
# create an instance of TransactionCardFraudCase from a dict
transaction_card_fraud_case_from_dict = TransactionCardFraudCase.from_dict(transaction_card_fraud_case_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


