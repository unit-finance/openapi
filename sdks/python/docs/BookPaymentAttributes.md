# BookPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | Either Sent or Rejected (see reason for details). | 
**reason** | **str** | Optional. More information about the status. | [optional] 
**direction** | **str** | The direction in which the funds flow (either Debit or Credit). | 
**description** | **str** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. | 
**transaction_summary_override** | **str** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | [optional] 
**amount** | **int** | The amount (cents) of the payment. | 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.book_payment_attributes import BookPaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BookPaymentAttributes from a JSON string
book_payment_attributes_instance = BookPaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(BookPaymentAttributes.to_json())

# convert the object into a dict
book_payment_attributes_dict = book_payment_attributes_instance.to_dict()
# create an instance of BookPaymentAttributes from a dict
book_payment_attributes_from_dict = BookPaymentAttributes.from_dict(book_payment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


