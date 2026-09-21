# ListCardFraudCases200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**AuthorizationCardFraudCaseAttributes**](AuthorizationCardFraudCaseAttributes.md) |  | 
**relationships** | [**AuthorizationCardFraudCaseRelationships**](AuthorizationCardFraudCaseRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_card_fraud_cases200_response_data_inner import ListCardFraudCases200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListCardFraudCases200ResponseDataInner from a JSON string
list_card_fraud_cases200_response_data_inner_instance = ListCardFraudCases200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListCardFraudCases200ResponseDataInner.to_json())

# convert the object into a dict
list_card_fraud_cases200_response_data_inner_dict = list_card_fraud_cases200_response_data_inner_instance.to_dict()
# create an instance of ListCardFraudCases200ResponseDataInner from a dict
list_card_fraud_cases200_response_data_inner_from_dict = ListCardFraudCases200ResponseDataInner.from_dict(list_card_fraud_cases200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


