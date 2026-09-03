# BookPayment

`BookPayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BookPaymentAttributes**](BookPaymentAttributes.md) |  | 
**relationships** | [**BookPaymentRelationships**](BookPaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.book_payment import BookPayment

# TODO update the JSON string below
json = "{}"
# create an instance of BookPayment from a JSON string
book_payment_instance = BookPayment.from_json(json)
# print the JSON string representation of the object
print(BookPayment.to_json())

# convert the object into a dict
book_payment_dict = book_payment_instance.to_dict()
# create an instance of BookPayment from a dict
book_payment_from_dict = BookPayment.from_dict(book_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


