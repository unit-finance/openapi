# FreezeAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**FreezeWalletData**](FreezeWalletData.md) |  | 

## Example

```python
from unit_finance_sdk.models.freeze_account_request import FreezeAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeAccountRequest from a JSON string
freeze_account_request_instance = FreezeAccountRequest.from_json(json)
# print the JSON string representation of the object
print(FreezeAccountRequest.to_json())

# convert the object into a dict
freeze_account_request_dict = freeze_account_request_instance.to_dict()
# create an instance of FreezeAccountRequest from a dict
freeze_account_request_from_dict = FreezeAccountRequest.from_dict(freeze_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


