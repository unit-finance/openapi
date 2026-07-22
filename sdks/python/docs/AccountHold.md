# AccountHold

`AccountHold` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**AccountHoldAttributes**](AccountHoldAttributes.md) |  | 
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.account_hold import AccountHold

# TODO update the JSON string below
json = "{}"
# create an instance of AccountHold from a JSON string
account_hold_instance = AccountHold.from_json(json)
# print the JSON string representation of the object
print(AccountHold.to_json())

# convert the object into a dict
account_hold_dict = account_hold_instance.to_dict()
# create an instance of AccountHold from a dict
account_hold_from_dict = AccountHold.from_dict(account_hold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


