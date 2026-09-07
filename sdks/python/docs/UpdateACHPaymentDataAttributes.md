# UpdateACHPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | See Updating Tags. | 
**clearing_days_override** | **int** | Only supports ACH Payments with direction Debit in status PendingReview or Pending. See Dynamic Clearing Period. | 

## Example

```python
from unit_finance_sdk.models.update_ach_payment_data_attributes import UpdateACHPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateACHPaymentDataAttributes from a JSON string
update_ach_payment_data_attributes_instance = UpdateACHPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateACHPaymentDataAttributes.to_json())

# convert the object into a dict
update_ach_payment_data_attributes_dict = update_ach_payment_data_attributes_instance.to_dict()
# create an instance of UpdateACHPaymentDataAttributes from a dict
update_ach_payment_data_attributes_from_dict = UpdateACHPaymentDataAttributes.from_dict(update_ach_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


