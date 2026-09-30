# BookRepayment

`bookRepayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BookRepaymentAttributes**](BookRepaymentAttributes.md) |  | 
**relationships** | [**BookRepaymentRelationships**](BookRepaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.book_repayment import BookRepayment

# TODO update the JSON string below
json = "{}"
# create an instance of BookRepayment from a JSON string
book_repayment_instance = BookRepayment.from_json(json)
# print the JSON string representation of the object
print(BookRepayment.to_json())

# convert the object into a dict
book_repayment_dict = book_repayment_instance.to_dict()
# create an instance of BookRepayment from a dict
book_repayment_from_dict = BookRepayment.from_dict(book_repayment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


