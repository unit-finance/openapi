# UpdateCounterparty200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ACHCounterparty**](ACHCounterparty.md) |  | 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.update_counterparty200_response import UpdateCounterparty200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCounterparty200Response from a JSON string
update_counterparty200_response_instance = UpdateCounterparty200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateCounterparty200Response.to_json())

# convert the object into a dict
update_counterparty200_response_dict = update_counterparty200_response_instance.to_dict()
# create an instance of UpdateCounterparty200Response from a dict
update_counterparty200_response_from_dict = UpdateCounterparty200Response.from_dict(update_counterparty200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


