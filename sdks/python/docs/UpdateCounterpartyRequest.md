# UpdateCounterpartyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateCounterpartyData**](UpdateCounterpartyData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_counterparty_request import UpdateCounterpartyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCounterpartyRequest from a JSON string
update_counterparty_request_instance = UpdateCounterpartyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCounterpartyRequest.to_json())

# convert the object into a dict
update_counterparty_request_dict = update_counterparty_request_instance.to_dict()
# create an instance of UpdateCounterpartyRequest from a dict
update_counterparty_request_from_dict = UpdateCounterpartyRequest.from_dict(update_counterparty_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


