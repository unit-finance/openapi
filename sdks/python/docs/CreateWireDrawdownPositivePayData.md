# CreateWireDrawdownPositivePayData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateWireDrawdownPositivePayDataAttributes**](CreateWireDrawdownPositivePayDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_wire_drawdown_positive_pay_data import CreateWireDrawdownPositivePayData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWireDrawdownPositivePayData from a JSON string
create_wire_drawdown_positive_pay_data_instance = CreateWireDrawdownPositivePayData.from_json(json)
# print the JSON string representation of the object
print(CreateWireDrawdownPositivePayData.to_json())

# convert the object into a dict
create_wire_drawdown_positive_pay_data_dict = create_wire_drawdown_positive_pay_data_instance.to_dict()
# create an instance of CreateWireDrawdownPositivePayData from a dict
create_wire_drawdown_positive_pay_data_from_dict = CreateWireDrawdownPositivePayData.from_dict(create_wire_drawdown_positive_pay_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


