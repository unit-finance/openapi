# WriteOffTransaction

`writeOffTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | 
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.write_off_transaction import WriteOffTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of WriteOffTransaction from a JSON string
write_off_transaction_instance = WriteOffTransaction.from_json(json)
# print the JSON string representation of the object
print(WriteOffTransaction.to_json())

# convert the object into a dict
write_off_transaction_dict = write_off_transaction_instance.to_dict()
# create an instance of WriteOffTransaction from a dict
write_off_transaction_from_dict = WriteOffTransaction.from_dict(write_off_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


