# CreateCounterpartyBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCounterpartyWithPlaidTokenData**](CreateCounterpartyWithPlaidTokenData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_counterparty_body import CreateCounterpartyBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCounterpartyBody from a JSON string
create_counterparty_body_instance = CreateCounterpartyBody.from_json(json)
# print the JSON string representation of the object
print(CreateCounterpartyBody.to_json())

# convert the object into a dict
create_counterparty_body_dict = create_counterparty_body_instance.to_dict()
# create an instance of CreateCounterpartyBody from a dict
create_counterparty_body_from_dict = CreateCounterpartyBody.from_dict(create_counterparty_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


