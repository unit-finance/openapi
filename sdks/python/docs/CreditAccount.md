# CreditAccount

`CreditAccount` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CreditAccountAttributes**](CreditAccountAttributes.md) |  | 
**relationships** | [**CreditAccountRelationships**](CreditAccountRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.credit_account import CreditAccount

# TODO update the JSON string below
json = "{}"
# create an instance of CreditAccount from a JSON string
credit_account_instance = CreditAccount.from_json(json)
# print the JSON string representation of the object
print(CreditAccount.to_json())

# convert the object into a dict
credit_account_dict = credit_account_instance.to_dict()
# create an instance of CreditAccount from a dict
credit_account_from_dict = CreditAccount.from_dict(credit_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


