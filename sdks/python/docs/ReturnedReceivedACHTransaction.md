# ReturnedReceivedACHTransaction

The transaction represents a received ACH that has been returned, automatically by Unit (e.g insufficient funds), by a dispute, or manually via a Return Received ACH.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ReturnedReceivedACHTransactionAttributes**](ReturnedReceivedACHTransactionAttributes.md) |  | 
**relationships** | [**ReturnedReceivedACHTransactionRelationships**](ReturnedReceivedACHTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.returned_received_ach_transaction import ReturnedReceivedACHTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnedReceivedACHTransaction from a JSON string
returned_received_ach_transaction_instance = ReturnedReceivedACHTransaction.from_json(json)
# print the JSON string representation of the object
print(ReturnedReceivedACHTransaction.to_json())

# convert the object into a dict
returned_received_ach_transaction_dict = returned_received_ach_transaction_instance.to_dict()
# create an instance of ReturnedReceivedACHTransaction from a dict
returned_received_ach_transaction_from_dict = ReturnedReceivedACHTransaction.from_dict(returned_received_ach_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


