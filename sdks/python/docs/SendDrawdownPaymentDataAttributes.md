# SendDrawdownPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **str** | See Idempotency. | 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags for the Wire Payment. | [optional] 

## Example

```python
from unit_finance_sdk.models.send_drawdown_payment_data_attributes import SendDrawdownPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of SendDrawdownPaymentDataAttributes from a JSON string
send_drawdown_payment_data_attributes_instance = SendDrawdownPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(SendDrawdownPaymentDataAttributes.to_json())

# convert the object into a dict
send_drawdown_payment_data_attributes_dict = send_drawdown_payment_data_attributes_instance.to_dict()
# create an instance of SendDrawdownPaymentDataAttributes from a dict
send_drawdown_payment_data_attributes_from_dict = SendDrawdownPaymentDataAttributes.from_dict(send_drawdown_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


