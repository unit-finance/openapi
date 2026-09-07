# CreateAWirePaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents). | 
**description** | **str** | Payment description (maximum of 50 characters), this will show up on statement of the counterparty. | 
**counterparty** | [**WireCounterpartyType**](WireCounterpartyType.md) | The party on the other side of the Wire payment. | 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_a_wire_payment_data_attributes import CreateAWirePaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAWirePaymentDataAttributes from a JSON string
create_a_wire_payment_data_attributes_instance = CreateAWirePaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateAWirePaymentDataAttributes.to_json())

# convert the object into a dict
create_a_wire_payment_data_attributes_dict = create_a_wire_payment_data_attributes_instance.to_dict()
# create an instance of CreateAWirePaymentDataAttributes from a dict
create_a_wire_payment_data_attributes_from_dict = CreateAWirePaymentDataAttributes.from_dict(create_a_wire_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


