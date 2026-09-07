# CreateAWirePaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateAWirePaymentData**](CreateAWirePaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_a_wire_payment_request import CreateAWirePaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAWirePaymentRequest from a JSON string
create_a_wire_payment_request_instance = CreateAWirePaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAWirePaymentRequest.to_json())

# convert the object into a dict
create_a_wire_payment_request_dict = create_a_wire_payment_request_instance.to_dict()
# create an instance of CreateAWirePaymentRequest from a dict
create_a_wire_payment_request_from_dict = CreateAWirePaymentRequest.from_dict(create_a_wire_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


