# CreateWireDrawdownPositivePayDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **date** | When the authorization expires. | [optional] 
**tags** | **Dict[str, object]** | Internal labels for your own use. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_wire_drawdown_positive_pay_data_attributes import CreateWireDrawdownPositivePayDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWireDrawdownPositivePayDataAttributes from a JSON string
create_wire_drawdown_positive_pay_data_attributes_instance = CreateWireDrawdownPositivePayDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateWireDrawdownPositivePayDataAttributes.to_json())

# convert the object into a dict
create_wire_drawdown_positive_pay_data_attributes_dict = create_wire_drawdown_positive_pay_data_attributes_instance.to_dict()
# create an instance of CreateWireDrawdownPositivePayDataAttributes from a dict
create_wire_drawdown_positive_pay_data_attributes_from_dict = CreateWireDrawdownPositivePayDataAttributes.from_dict(create_wire_drawdown_positive_pay_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


