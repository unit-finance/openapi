# ReleaseAccountHoldDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | Minimum is 1. The amount (in cents) to release from the hold. The hold status will become PartiallyReleased, unless this equals the full remaining hold amount, in which case it becomes Released. | 
**idempotency_key** | **str** | 1 to 255 characters. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.release_account_hold_data_attributes import ReleaseAccountHoldDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseAccountHoldDataAttributes from a JSON string
release_account_hold_data_attributes_instance = ReleaseAccountHoldDataAttributes.from_json(json)
# print the JSON string representation of the object
print(ReleaseAccountHoldDataAttributes.to_json())

# convert the object into a dict
release_account_hold_data_attributes_dict = release_account_hold_data_attributes_instance.to_dict()
# create an instance of ReleaseAccountHoldDataAttributes from a dict
release_account_hold_data_attributes_from_dict = ReleaseAccountHoldDataAttributes.from_dict(release_account_hold_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


