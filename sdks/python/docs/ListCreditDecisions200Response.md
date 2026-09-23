# ListCreditDecisions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListCreditDecisions200ResponseDataInner]**](ListCreditDecisions200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.list_credit_decisions200_response import ListCreditDecisions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListCreditDecisions200Response from a JSON string
list_credit_decisions200_response_instance = ListCreditDecisions200Response.from_json(json)
# print the JSON string representation of the object
print(ListCreditDecisions200Response.to_json())

# convert the object into a dict
list_credit_decisions200_response_dict = list_credit_decisions200_response_instance.to_dict()
# create an instance of ListCreditDecisions200Response from a dict
list_credit_decisions200_response_from_dict = ListCreditDecisions200Response.from_dict(list_credit_decisions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


