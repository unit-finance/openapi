# UpdateCounterpartyData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateCounterpartyDataAttributes**](UpdateCounterpartyDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_counterparty_data import UpdateCounterpartyData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCounterpartyData from a JSON string
update_counterparty_data_instance = UpdateCounterpartyData.from_json(json)
# print the JSON string representation of the object
print(UpdateCounterpartyData.to_json())

# convert the object into a dict
update_counterparty_data_dict = update_counterparty_data_instance.to_dict()
# create an instance of UpdateCounterpartyData from a dict
update_counterparty_data_from_dict = UpdateCounterpartyData.from_dict(update_counterparty_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


