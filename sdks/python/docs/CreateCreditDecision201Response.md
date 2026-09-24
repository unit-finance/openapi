# CreateCreditDecision201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListCreditDecisions200ResponseDataInner**](ListCreditDecisions200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_credit_decision201_response import CreateCreditDecision201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCreditDecision201Response from a JSON string
create_credit_decision201_response_instance = CreateCreditDecision201Response.from_json(json)
# print the JSON string representation of the object
print(CreateCreditDecision201Response.to_json())

# convert the object into a dict
create_credit_decision201_response_dict = create_credit_decision201_response_instance.to_dict()
# create an instance of CreateCreditDecision201Response from a dict
create_credit_decision201_response_from_dict = CreateCreditDecision201Response.from_dict(create_credit_decision201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


