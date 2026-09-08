# UpdateBookTransactionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateBookTransactionDataAttributes**](UpdateBookTransactionDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_book_transaction_data import UpdateBookTransactionData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBookTransactionData from a JSON string
update_book_transaction_data_instance = UpdateBookTransactionData.from_json(json)
# print the JSON string representation of the object
print(UpdateBookTransactionData.to_json())

# convert the object into a dict
update_book_transaction_data_dict = update_book_transaction_data_instance.to_dict()
# create an instance of UpdateBookTransactionData from a dict
update_book_transaction_data_from_dict = UpdateBookTransactionData.from_dict(update_book_transaction_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


