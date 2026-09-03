# CreateAWirePaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateAWirePaymentDataAttributes**](CreateAWirePaymentDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_a_wire_payment_data import CreateAWirePaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAWirePaymentData from a JSON string
create_a_wire_payment_data_instance = CreateAWirePaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateAWirePaymentData.to_json())

# convert the object into a dict
create_a_wire_payment_data_dict = create_a_wire_payment_data_instance.to_dict()
# create an instance of CreateAWirePaymentData from a dict
create_a_wire_payment_data_from_dict = CreateAWirePaymentData.from_dict(create_a_wire_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


