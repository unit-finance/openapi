# CreateFeeData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateFeeDataAttributes**](CreateFeeDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_fee_data import CreateFeeData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFeeData from a JSON string
create_fee_data_instance = CreateFeeData.from_json(json)
# print the JSON string representation of the object
print(CreateFeeData.to_json())

# convert the object into a dict
create_fee_data_dict = create_fee_data_instance.to_dict()
# create an instance of CreateFeeData from a dict
create_fee_data_from_dict = CreateFeeData.from_dict(create_fee_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


