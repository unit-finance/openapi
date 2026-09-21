# GetCardFraudCaseById200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListCardFraudCases200ResponseDataInner**](ListCardFraudCases200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_card_fraud_case_by_id200_response import GetCardFraudCaseById200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetCardFraudCaseById200Response from a JSON string
get_card_fraud_case_by_id200_response_instance = GetCardFraudCaseById200Response.from_json(json)
# print the JSON string representation of the object
print(GetCardFraudCaseById200Response.to_json())

# convert the object into a dict
get_card_fraud_case_by_id200_response_dict = get_card_fraud_case_by_id200_response_instance.to_dict()
# create an instance of GetCardFraudCaseById200Response from a dict
get_card_fraud_case_by_id200_response_from_dict = GetCardFraudCaseById200Response.from_dict(get_card_fraud_case_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


