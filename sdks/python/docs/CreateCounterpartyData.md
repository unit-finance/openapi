# CreateCounterpartyData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateCounterpartyDataAttributes**](CreateCounterpartyDataAttributes.md) |  | 
**relationships** | [**CreateDepositAccountDataRelationships**](CreateDepositAccountDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_counterparty_data import CreateCounterpartyData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCounterpartyData from a JSON string
create_counterparty_data_instance = CreateCounterpartyData.from_json(json)
# print the JSON string representation of the object
print(CreateCounterpartyData.to_json())

# convert the object into a dict
create_counterparty_data_dict = create_counterparty_data_instance.to_dict()
# create an instance of CreateCounterpartyData from a dict
create_counterparty_data_from_dict = CreateCounterpartyData.from_dict(create_counterparty_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


