# ReverseFeeDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the fee (maximum of 50 characters). | 
**tags** | **Dict[str, object]** | Optional. See Tags. | [optional] 
**idempotency_key** | **str** | Optional, but **strongly recommended**. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.reverse_fee_data_attributes import ReverseFeeDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ReverseFeeDataAttributes from a JSON string
reverse_fee_data_attributes_instance = ReverseFeeDataAttributes.from_json(json)
# print the JSON string representation of the object
print(ReverseFeeDataAttributes.to_json())

# convert the object into a dict
reverse_fee_data_attributes_dict = reverse_fee_data_attributes_instance.to_dict()
# create an instance of ReverseFeeDataAttributes from a dict
reverse_fee_data_attributes_from_dict = ReverseFeeDataAttributes.from_dict(reverse_fee_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


