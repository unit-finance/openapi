# CreateCheckStopPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents) to look on payments to stop. | [optional] 
**check_number** | **str** | The check number to look on a check payment to stop. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**idempotency_key** | **str** | Optional, but **strongly recommended**. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_check_stop_payment_data_attributes import CreateCheckStopPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckStopPaymentDataAttributes from a JSON string
create_check_stop_payment_data_attributes_instance = CreateCheckStopPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCheckStopPaymentDataAttributes.to_json())

# convert the object into a dict
create_check_stop_payment_data_attributes_dict = create_check_stop_payment_data_attributes_instance.to_dict()
# create an instance of CreateCheckStopPaymentDataAttributes from a dict
create_check_stop_payment_data_attributes_from_dict = CreateCheckStopPaymentDataAttributes.from_dict(create_check_stop_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


