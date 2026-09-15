# CreateCounterparty201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ACHCounterparty**](ACHCounterparty.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_counterparty201_response import CreateCounterparty201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCounterparty201Response from a JSON string
create_counterparty201_response_instance = CreateCounterparty201Response.from_json(json)
# print the JSON string representation of the object
print(CreateCounterparty201Response.to_json())

# convert the object into a dict
create_counterparty201_response_dict = create_counterparty201_response_instance.to_dict()
# create an instance of CreateCounterparty201Response from a dict
create_counterparty201_response_from_dict = CreateCounterparty201Response.from_dict(create_counterparty201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


