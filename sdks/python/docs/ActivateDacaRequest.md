# ActivateDacaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActivateDacaData**](ActivateDacaData.md) |  | 

## Example

```python
from unit_finance_sdk.models.activate_daca_request import ActivateDacaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ActivateDacaRequest from a JSON string
activate_daca_request_instance = ActivateDacaRequest.from_json(json)
# print the JSON string representation of the object
print(ActivateDacaRequest.to_json())

# convert the object into a dict
activate_daca_request_dict = activate_daca_request_instance.to_dict()
# create an instance of ActivateDacaRequest from a dict
activate_daca_request_from_dict = ActivateDacaRequest.from_dict(activate_daca_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


