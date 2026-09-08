# InterestShareTransaction

`interestShareTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | 
**relationships** | [**InterestShareTransactionRelationships**](InterestShareTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.interest_share_transaction import InterestShareTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of InterestShareTransaction from a JSON string
interest_share_transaction_instance = InterestShareTransaction.from_json(json)
# print the JSON string representation of the object
print(InterestShareTransaction.to_json())

# convert the object into a dict
interest_share_transaction_dict = interest_share_transaction_instance.to_dict()
# create an instance of InterestShareTransaction from a dict
interest_share_transaction_from_dict = InterestShareTransaction.from_dict(interest_share_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


