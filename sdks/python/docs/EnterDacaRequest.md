# EnterDacaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EnterDacaData**](EnterDacaData.md) |  | 

## Example

```python
from unit_finance_sdk.models.enter_daca_request import EnterDacaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnterDacaRequest from a JSON string
enter_daca_request_instance = EnterDacaRequest.from_json(json)
# print the JSON string representation of the object
print(EnterDacaRequest.to_json())

# convert the object into a dict
enter_daca_request_dict = enter_daca_request_instance.to_dict()
# create an instance of EnterDacaRequest from a dict
enter_daca_request_from_dict = EnterDacaRequest.from_dict(enter_daca_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


