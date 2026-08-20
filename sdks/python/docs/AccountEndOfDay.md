# AccountEndOfDay

`Account End-Of-Day` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**AccountEndOfDayAttributes**](AccountEndOfDayAttributes.md) |  | 
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.account_end_of_day import AccountEndOfDay

# TODO update the JSON string below
json = "{}"
# create an instance of AccountEndOfDay from a JSON string
account_end_of_day_instance = AccountEndOfDay.from_json(json)
# print the JSON string representation of the object
print(AccountEndOfDay.to_json())

# convert the object into a dict
account_end_of_day_dict = account_end_of_day_instance.to_dict()
# create an instance of AccountEndOfDay from a dict
account_end_of_day_from_dict = AccountEndOfDay.from_dict(account_end_of_day_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


