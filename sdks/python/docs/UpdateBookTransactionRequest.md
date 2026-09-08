# UpdateBookTransactionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateBookTransactionData**](UpdateBookTransactionData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_book_transaction_request import UpdateBookTransactionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBookTransactionRequest from a JSON string
update_book_transaction_request_instance = UpdateBookTransactionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBookTransactionRequest.to_json())

# convert the object into a dict
update_book_transaction_request_dict = update_book_transaction_request_instance.to_dict()
# create an instance of UpdateBookTransactionRequest from a dict
update_book_transaction_request_from_dict = UpdateBookTransactionRequest.from_dict(update_book_transaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


