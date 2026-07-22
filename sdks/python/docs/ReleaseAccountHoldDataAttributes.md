# ReleaseAccountHoldDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents) to release from the hold. The hold status will become PartiallyReleased. | 
**idempotency_key** | **str** | See Idempotency. | [optional] 

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


