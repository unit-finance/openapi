# GetCounterpartyBalance200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CounterpartyBalance**](CounterpartyBalance.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_counterparty_balance200_response import GetCounterpartyBalance200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetCounterpartyBalance200Response from a JSON string
get_counterparty_balance200_response_instance = GetCounterpartyBalance200Response.from_json(json)
# print the JSON string representation of the object
print(GetCounterpartyBalance200Response.to_json())

# convert the object into a dict
get_counterparty_balance200_response_dict = get_counterparty_balance200_response_instance.to_dict()
# create an instance of GetCounterpartyBalance200Response from a dict
get_counterparty_balance200_response_from_dict = GetCounterpartyBalance200Response.from_dict(get_counterparty_balance200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


