# WireDrawdownPositivePayAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | One of AwaitingDocuments, Active, Expired, or Cancelled. | 
**expiration_date** | **date** | When the authorization expires. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.wire_drawdown_positive_pay_attributes import WireDrawdownPositivePayAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of WireDrawdownPositivePayAttributes from a JSON string
wire_drawdown_positive_pay_attributes_instance = WireDrawdownPositivePayAttributes.from_json(json)
# print the JSON string representation of the object
print(WireDrawdownPositivePayAttributes.to_json())

# convert the object into a dict
wire_drawdown_positive_pay_attributes_dict = wire_drawdown_positive_pay_attributes_instance.to_dict()
# create an instance of WireDrawdownPositivePayAttributes from a dict
wire_drawdown_positive_pay_attributes_from_dict = WireDrawdownPositivePayAttributes.from_dict(wire_drawdown_positive_pay_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


