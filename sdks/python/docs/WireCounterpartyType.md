# WireCounterpartyType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routing_number** | **str** | Valid 9-digit ABA routing transit number. | 
**account_number** | **str** | Bank account number. | 
**name** | **str** | Name of the person or company that owns the bank account. | 
**address** | [**AddressType**](AddressType.md) | Address of the counterparty account owner. | 

## Example

```python
from unit_finance_sdk.models.wire_counterparty_type import WireCounterpartyType

# TODO update the JSON string below
json = "{}"
# create an instance of WireCounterpartyType from a JSON string
wire_counterparty_type_instance = WireCounterpartyType.from_json(json)
# print the JSON string representation of the object
print(WireCounterpartyType.to_json())

# convert the object into a dict
wire_counterparty_type_dict = wire_counterparty_type_instance.to_dict()
# create an instance of WireCounterpartyType from a dict
wire_counterparty_type_from_dict = WireCounterpartyType.from_dict(wire_counterparty_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


