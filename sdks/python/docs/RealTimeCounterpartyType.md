# RealTimeCounterpartyType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routing_number** | **str** | Valid 9-digit ABA routing transit number. | 
**account_number** | **str** | Bank account number. | 
**name** | **str** | Name of the person or company that owns the bank account. | 

## Example

```python
from unit_finance_sdk.models.real_time_counterparty_type import RealTimeCounterpartyType

# TODO update the JSON string below
json = "{}"
# create an instance of RealTimeCounterpartyType from a JSON string
real_time_counterparty_type_instance = RealTimeCounterpartyType.from_json(json)
# print the JSON string representation of the object
print(RealTimeCounterpartyType.to_json())

# convert the object into a dict
real_time_counterparty_type_dict = real_time_counterparty_type_instance.to_dict()
# create an instance of RealTimeCounterpartyType from a dict
real_time_counterparty_type_from_dict = RealTimeCounterpartyType.from_dict(real_time_counterparty_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


