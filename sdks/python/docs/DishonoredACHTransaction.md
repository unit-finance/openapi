# DishonoredACHTransaction

A dishonored ACH transaction is a relatively uncommon transaction type, that happens when Unit attempts to return a received ACH, but the originating bank decides not to return the funds. This typically happens when the return is not in compliance with the NACHA rules (e.g. 3 days after the payment took place when the network rules define a maximum of 2 days).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**DishonoredACHTransactionAttributes**](DishonoredACHTransactionAttributes.md) |  | 
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.dishonored_ach_transaction import DishonoredACHTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of DishonoredACHTransaction from a JSON string
dishonored_ach_transaction_instance = DishonoredACHTransaction.from_json(json)
# print the JSON string representation of the object
print(DishonoredACHTransaction.to_json())

# convert the object into a dict
dishonored_ach_transaction_dict = dishonored_ach_transaction_instance.to_dict()
# create an instance of DishonoredACHTransaction from a dict
dishonored_ach_transaction_from_dict = DishonoredACHTransaction.from_dict(dishonored_ach_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


