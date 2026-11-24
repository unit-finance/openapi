# DeactivateDacaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DeactivateDacaData**](DeactivateDacaData.md) |  | 

## Example

```python
from unit_finance_sdk.models.deactivate_daca_request import DeactivateDacaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeactivateDacaRequest from a JSON string
deactivate_daca_request_instance = DeactivateDacaRequest.from_json(json)
# print the JSON string representation of the object
print(DeactivateDacaRequest.to_json())

# convert the object into a dict
deactivate_daca_request_dict = deactivate_daca_request_instance.to_dict()
# create an instance of DeactivateDacaRequest from a dict
deactivate_daca_request_from_dict = DeactivateDacaRequest.from_dict(deactivate_daca_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


