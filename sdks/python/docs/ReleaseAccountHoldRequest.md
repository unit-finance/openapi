# ReleaseAccountHoldRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ReleaseAccountHoldData**](ReleaseAccountHoldData.md) |  | 

## Example

```python
from unit_finance_sdk.models.release_account_hold_request import ReleaseAccountHoldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseAccountHoldRequest from a JSON string
release_account_hold_request_instance = ReleaseAccountHoldRequest.from_json(json)
# print the JSON string representation of the object
print(ReleaseAccountHoldRequest.to_json())

# convert the object into a dict
release_account_hold_request_dict = release_account_hold_request_instance.to_dict()
# create an instance of ReleaseAccountHoldRequest from a dict
release_account_hold_request_from_dict = ReleaseAccountHoldRequest.from_dict(release_account_hold_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


