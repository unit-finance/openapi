# UpdateReceivedPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateBookPaymentDataAttributes**](UpdateBookPaymentDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_received_payment_data import UpdateReceivedPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateReceivedPaymentData from a JSON string
update_received_payment_data_instance = UpdateReceivedPaymentData.from_json(json)
# print the JSON string representation of the object
print(UpdateReceivedPaymentData.to_json())

# convert the object into a dict
update_received_payment_data_dict = update_received_payment_data_instance.to_dict()
# create an instance of UpdateReceivedPaymentData from a dict
update_received_payment_data_from_dict = UpdateReceivedPaymentData.from_dict(update_received_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


