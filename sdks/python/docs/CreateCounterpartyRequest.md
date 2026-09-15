# CreateCounterpartyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCounterpartyData**](CreateCounterpartyData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_counterparty_request import CreateCounterpartyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCounterpartyRequest from a JSON string
create_counterparty_request_instance = CreateCounterpartyRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCounterpartyRequest.to_json())

# convert the object into a dict
create_counterparty_request_dict = create_counterparty_request_instance.to_dict()
# create an instance of CreateCounterpartyRequest from a dict
create_counterparty_request_from_dict = CreateCounterpartyRequest.from_dict(create_counterparty_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


