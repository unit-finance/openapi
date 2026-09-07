# UpdateACHReceivedPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | See Updating Tags. | 

## Example

```python
from unit_finance_sdk.models.update_ach_received_payment_data_attributes import UpdateACHReceivedPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateACHReceivedPaymentDataAttributes from a JSON string
update_ach_received_payment_data_attributes_instance = UpdateACHReceivedPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateACHReceivedPaymentDataAttributes.to_json())

# convert the object into a dict
update_ach_received_payment_data_attributes_dict = update_ach_received_payment_data_attributes_instance.to_dict()
# create an instance of UpdateACHReceivedPaymentDataAttributes from a dict
update_ach_received_payment_data_attributes_from_dict = UpdateACHReceivedPaymentDataAttributes.from_dict(update_ach_received_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


