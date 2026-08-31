# UpdateACHReceivedPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateACHReceivedPaymentDataAttributes**](UpdateACHReceivedPaymentDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_ach_received_payment_data import UpdateACHReceivedPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateACHReceivedPaymentData from a JSON string
update_ach_received_payment_data_instance = UpdateACHReceivedPaymentData.from_json(json)
# print the JSON string representation of the object
print(UpdateACHReceivedPaymentData.to_json())

# convert the object into a dict
update_ach_received_payment_data_dict = update_ach_received_payment_data_instance.to_dict()
# create an instance of UpdateACHReceivedPaymentData from a dict
update_ach_received_payment_data_from_dict = UpdateACHReceivedPaymentData.from_dict(update_ach_received_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


