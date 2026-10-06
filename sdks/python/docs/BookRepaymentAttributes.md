# BookRepaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | 
**amount** | **int** | The amount (cents) of the payment. | 
**status** | **str** | Either Sent or Rejected | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.book_repayment_attributes import BookRepaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BookRepaymentAttributes from a JSON string
book_repayment_attributes_instance = BookRepaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(BookRepaymentAttributes.to_json())

# convert the object into a dict
book_repayment_attributes_dict = book_repayment_attributes_instance.to_dict()
# create an instance of BookRepaymentAttributes from a dict
book_repayment_attributes_from_dict = BookRepaymentAttributes.from_dict(book_repayment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


