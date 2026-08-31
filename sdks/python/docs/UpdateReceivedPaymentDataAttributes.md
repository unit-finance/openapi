# UpdateReceivedPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | See Updating Tags. | 

## Example

```python
from unit_finance_sdk.models.update_received_payment_data_attributes import UpdateReceivedPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateReceivedPaymentDataAttributes from a JSON string
update_received_payment_data_attributes_instance = UpdateReceivedPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateReceivedPaymentDataAttributes.to_json())

# convert the object into a dict
update_received_payment_data_attributes_dict = update_received_payment_data_attributes_instance.to_dict()
# create an instance of UpdateReceivedPaymentDataAttributes from a dict
update_received_payment_data_attributes_from_dict = UpdateReceivedPaymentDataAttributes.from_dict(update_received_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


