# CheckDeposit

`CheckDeposit` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckDepositAttributes**](CheckDepositAttributes.md) |  | 
**relationships** | [**CheckDepositRelationships**](CheckDepositRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.check_deposit import CheckDeposit

# TODO update the JSON string below
json = "{}"
# create an instance of CheckDeposit from a JSON string
check_deposit_instance = CheckDeposit.from_json(json)
# print the JSON string representation of the object
print(CheckDeposit.to_json())

# convert the object into a dict
check_deposit_dict = check_deposit_instance.to_dict()
# create an instance of CheckDeposit from a dict
check_deposit_from_dict = CheckDeposit.from_dict(check_deposit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


