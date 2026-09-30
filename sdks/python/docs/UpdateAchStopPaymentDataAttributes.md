# UpdateAchStopPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | See Updating Tags. | [optional] 
**expiration** | **date** | Date only (e.g. \&quot;2026-08-15\&quot;). | [optional] 

## Example

```python
from unit_finance_sdk.models.update_ach_stop_payment_data_attributes import UpdateAchStopPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAchStopPaymentDataAttributes from a JSON string
update_ach_stop_payment_data_attributes_instance = UpdateAchStopPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateAchStopPaymentDataAttributes.to_json())

# convert the object into a dict
update_ach_stop_payment_data_attributes_dict = update_ach_stop_payment_data_attributes_instance.to_dict()
# create an instance of UpdateAchStopPaymentDataAttributes from a dict
update_ach_stop_payment_data_attributes_from_dict = UpdateAchStopPaymentDataAttributes.from_dict(update_ach_stop_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


