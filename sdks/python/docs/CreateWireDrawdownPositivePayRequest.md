# CreateWireDrawdownPositivePayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateWireDrawdownPositivePayData**](CreateWireDrawdownPositivePayData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_wire_drawdown_positive_pay_request import CreateWireDrawdownPositivePayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWireDrawdownPositivePayRequest from a JSON string
create_wire_drawdown_positive_pay_request_instance = CreateWireDrawdownPositivePayRequest.from_json(json)
# print the JSON string representation of the object
print(CreateWireDrawdownPositivePayRequest.to_json())

# convert the object into a dict
create_wire_drawdown_positive_pay_request_dict = create_wire_drawdown_positive_pay_request_instance.to_dict()
# create an instance of CreateWireDrawdownPositivePayRequest from a dict
create_wire_drawdown_positive_pay_request_from_dict = CreateWireDrawdownPositivePayRequest.from_dict(create_wire_drawdown_positive_pay_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


