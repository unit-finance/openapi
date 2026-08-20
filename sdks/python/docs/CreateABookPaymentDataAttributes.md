# CreateABookPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents). | 
**description** | **str** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. | 
**transaction_summary_override** | **str** | Optional. If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_a_book_payment_data_attributes import CreateABookPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateABookPaymentDataAttributes from a JSON string
create_a_book_payment_data_attributes_instance = CreateABookPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateABookPaymentDataAttributes.to_json())

# convert the object into a dict
create_a_book_payment_data_attributes_dict = create_a_book_payment_data_attributes_instance.to_dict()
# create an instance of CreateABookPaymentDataAttributes from a dict
create_a_book_payment_data_attributes_from_dict = CreateABookPaymentDataAttributes.from_dict(create_a_book_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


