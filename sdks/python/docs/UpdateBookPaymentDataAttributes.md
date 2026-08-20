# UpdateBookPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | See Updating Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_book_payment_data_attributes import UpdateBookPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBookPaymentDataAttributes from a JSON string
update_book_payment_data_attributes_instance = UpdateBookPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateBookPaymentDataAttributes.to_json())

# convert the object into a dict
update_book_payment_data_attributes_dict = update_book_payment_data_attributes_instance.to_dict()
# create an instance of UpdateBookPaymentDataAttributes from a dict
update_book_payment_data_attributes_from_dict = UpdateBookPaymentDataAttributes.from_dict(update_book_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


