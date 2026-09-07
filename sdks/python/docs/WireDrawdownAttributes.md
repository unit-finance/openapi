# WireDrawdownAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**amount** | **int** | The amount (cents) of the wire drawdown. | 
**description** | **str** | Wire drawdown description. | 
**counterparty** | [**WireCounterpartyType**](WireCounterpartyType.md) | The beneficiary party on the other end of the wire drawdown. | 
**direction** | **str** | The direction of the wire drawdown, either Incoming or Outgoing. | 
**imad** | **str** | Input Message Accountability Data. It&#39;s a unique number given to each wire drawdown. | [optional] 
**omad** | **str** | Output Message Accountability Data. It&#39;s a unique number given to each wire drawdown. | [optional] 
**sender_reference** | **str** | Sender reference. | [optional] 
**reference_for_beneficiary** | **str** | Reference for the Beneficiary. | [optional] 
**beneficiary_information** | **str** | Beneficiary Information, multi-line string delimited by \\n. | [optional] 
**beneficiary_advice_information** | **str** | Beneficiary Advice Information, multi-line string delimited by \\n. | [optional] 
**originator_to_beneficiary_information** | **str** | Originator To Beneficiary Information, multi-line string delimited by \\n. | [optional] 

## Example

```python
from unit_finance_sdk.models.wire_drawdown_attributes import WireDrawdownAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of WireDrawdownAttributes from a JSON string
wire_drawdown_attributes_instance = WireDrawdownAttributes.from_json(json)
# print the JSON string representation of the object
print(WireDrawdownAttributes.to_json())

# convert the object into a dict
wire_drawdown_attributes_dict = wire_drawdown_attributes_instance.to_dict()
# create an instance of WireDrawdownAttributes from a dict
wire_drawdown_attributes_from_dict = WireDrawdownAttributes.from_dict(wire_drawdown_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


