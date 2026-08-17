# ReverseFeeData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**ReverseFeeDataAttributes**](ReverseFeeDataAttributes.md) |  | 
**relationships** | [**ReverseFeeDataRelationships**](ReverseFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.reverse_fee_data import ReverseFeeData

# TODO update the JSON string below
json = "{}"
# create an instance of ReverseFeeData from a JSON string
reverse_fee_data_instance = ReverseFeeData.from_json(json)
# print the JSON string representation of the object
print(ReverseFeeData.to_json())

# convert the object into a dict
reverse_fee_data_dict = reverse_fee_data_instance.to_dict()
# create an instance of ReverseFeeData from a dict
reverse_fee_data_from_dict = ReverseFeeData.from_dict(reverse_fee_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


