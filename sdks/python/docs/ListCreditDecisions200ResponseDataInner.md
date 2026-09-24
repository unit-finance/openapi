# ListCreditDecisions200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ManualReviewCreditApplicationDecisionAttributes**](ManualReviewCreditApplicationDecisionAttributes.md) |  | 
**relationships** | [**DeniedCreditApplicationDecisionRelationships**](DeniedCreditApplicationDecisionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_credit_decisions200_response_data_inner import ListCreditDecisions200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListCreditDecisions200ResponseDataInner from a JSON string
list_credit_decisions200_response_data_inner_instance = ListCreditDecisions200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListCreditDecisions200ResponseDataInner.to_json())

# convert the object into a dict
list_credit_decisions200_response_data_inner_dict = list_credit_decisions200_response_data_inner_instance.to_dict()
# create an instance of ListCreditDecisions200ResponseDataInner from a dict
list_credit_decisions200_response_data_inner_from_dict = ListCreditDecisions200ResponseDataInner.from_dict(list_credit_decisions200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


