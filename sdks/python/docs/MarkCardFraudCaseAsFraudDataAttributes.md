# MarkCardFraudCaseAsFraudDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fraudulent_activity_ids** | **List[int]** | The ids of the fraudulent activities. The activities are the card activities that are marked as fraudulent. The activities are linked to the card fraud case. | 

## Example

```python
from unit_finance_sdk.models.mark_card_fraud_case_as_fraud_data_attributes import MarkCardFraudCaseAsFraudDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of MarkCardFraudCaseAsFraudDataAttributes from a JSON string
mark_card_fraud_case_as_fraud_data_attributes_instance = MarkCardFraudCaseAsFraudDataAttributes.from_json(json)
# print the JSON string representation of the object
print(MarkCardFraudCaseAsFraudDataAttributes.to_json())

# convert the object into a dict
mark_card_fraud_case_as_fraud_data_attributes_dict = mark_card_fraud_case_as_fraud_data_attributes_instance.to_dict()
# create an instance of MarkCardFraudCaseAsFraudDataAttributes from a dict
mark_card_fraud_case_as_fraud_data_attributes_from_dict = MarkCardFraudCaseAsFraudDataAttributes.from_dict(mark_card_fraud_case_as_fraud_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


