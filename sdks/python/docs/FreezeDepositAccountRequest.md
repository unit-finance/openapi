# FreezeDepositAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**FreezeDepositAccountData**](FreezeDepositAccountData.md) |  | 

## Example

```python
from unit_finance_sdk.models.freeze_deposit_account_request import FreezeDepositAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeDepositAccountRequest from a JSON string
freeze_deposit_account_request_instance = FreezeDepositAccountRequest.from_json(json)
# print the JSON string representation of the object
print(FreezeDepositAccountRequest.to_json())

# convert the object into a dict
freeze_deposit_account_request_dict = freeze_deposit_account_request_instance.to_dict()
# create an instance of FreezeDepositAccountRequest from a dict
freeze_deposit_account_request_from_dict = FreezeDepositAccountRequest.from_dict(freeze_deposit_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


