# ListCardFraudCases200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListCardFraudCases200ResponseDataInner]**](ListCardFraudCases200ResponseDataInner.md) | Array of card fraud case resources. Each resource can be either Transaction or Authorization, as indicated by the type field. | 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_card_fraud_cases200_response import ListCardFraudCases200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListCardFraudCases200Response from a JSON string
list_card_fraud_cases200_response_instance = ListCardFraudCases200Response.from_json(json)
# print the JSON string representation of the object
print(ListCardFraudCases200Response.to_json())

# convert the object into a dict
list_card_fraud_cases200_response_dict = list_card_fraud_cases200_response_instance.to_dict()
# create an instance of ListCardFraudCases200Response from a dict
list_card_fraud_cases200_response_from_dict = ListCardFraudCases200Response.from_dict(list_card_fraud_cases200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


