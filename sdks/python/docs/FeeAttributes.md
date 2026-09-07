# FeeAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents) of the fee. | 
**description** | **str** | Description of the fee. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.fee_attributes import FeeAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of FeeAttributes from a JSON string
fee_attributes_instance = FeeAttributes.from_json(json)
# print the JSON string representation of the object
print(FeeAttributes.to_json())

# convert the object into a dict
fee_attributes_dict = fee_attributes_instance.to_dict()
# create an instance of FeeAttributes from a dict
fee_attributes_from_dict = FeeAttributes.from_dict(fee_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


