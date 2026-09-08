# ReceivedACHTransaction

`ReceivedAchTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ReceivedACHTransactionAttributes**](ReceivedACHTransactionAttributes.md) |  | 
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.received_ach_transaction import ReceivedACHTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivedACHTransaction from a JSON string
received_ach_transaction_instance = ReceivedACHTransaction.from_json(json)
# print the JSON string representation of the object
print(ReceivedACHTransaction.to_json())

# convert the object into a dict
received_ach_transaction_dict = received_ach_transaction_instance.to_dict()
# create an instance of ReceivedACHTransaction from a dict
received_ach_transaction_from_dict = ReceivedACHTransaction.from_dict(received_ach_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


