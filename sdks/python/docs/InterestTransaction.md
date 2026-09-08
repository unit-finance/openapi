# InterestTransaction

`InterestTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | 
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.interest_transaction import InterestTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of InterestTransaction from a JSON string
interest_transaction_instance = InterestTransaction.from_json(json)
# print the JSON string representation of the object
print(InterestTransaction.to_json())

# convert the object into a dict
interest_transaction_dict = interest_transaction_instance.to_dict()
# create an instance of InterestTransaction from a dict
interest_transaction_from_dict = InterestTransaction.from_dict(interest_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


