# TotalAccruedInterestType

Represents a sum of customer accrued interest for a given period of time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The total amount of customer accrued interest (in cents). | 

## Example

```python
from unit_finance_sdk.models.total_accrued_interest_type import TotalAccruedInterestType

# TODO update the JSON string below
json = "{}"
# create an instance of TotalAccruedInterestType from a JSON string
total_accrued_interest_type_instance = TotalAccruedInterestType.from_json(json)
# print the JSON string representation of the object
print(TotalAccruedInterestType.to_json())

# convert the object into a dict
total_accrued_interest_type_dict = total_accrued_interest_type_instance.to_dict()
# create an instance of TotalAccruedInterestType from a dict
total_accrued_interest_type_from_dict = TotalAccruedInterestType.from_dict(total_accrued_interest_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


