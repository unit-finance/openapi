# FeeReversalAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the fee. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.fee_reversal_attributes import FeeReversalAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of FeeReversalAttributes from a JSON string
fee_reversal_attributes_instance = FeeReversalAttributes.from_json(json)
# print the JSON string representation of the object
print(FeeReversalAttributes.to_json())

# convert the object into a dict
fee_reversal_attributes_dict = fee_reversal_attributes_instance.to_dict()
# create an instance of FeeReversalAttributes from a dict
fee_reversal_attributes_from_dict = FeeReversalAttributes.from_dict(fee_reversal_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


