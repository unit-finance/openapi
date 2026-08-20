# ReleaseAccountHoldData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**ReleaseAccountHoldDataAttributes**](ReleaseAccountHoldDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.release_account_hold_data import ReleaseAccountHoldData

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseAccountHoldData from a JSON string
release_account_hold_data_instance = ReleaseAccountHoldData.from_json(json)
# print the JSON string representation of the object
print(ReleaseAccountHoldData.to_json())

# convert the object into a dict
release_account_hold_data_dict = release_account_hold_data_instance.to_dict()
# create an instance of ReleaseAccountHoldData from a dict
release_account_hold_data_from_dict = ReleaseAccountHoldData.from_dict(release_account_hold_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


