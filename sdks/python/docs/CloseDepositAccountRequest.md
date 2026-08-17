# CloseDepositAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CloseDepositAccountData**](CloseDepositAccountData.md) |  | 

## Example

```python
from unit_finance_sdk.models.close_deposit_account_request import CloseDepositAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloseDepositAccountRequest from a JSON string
close_deposit_account_request_instance = CloseDepositAccountRequest.from_json(json)
# print the JSON string representation of the object
print(CloseDepositAccountRequest.to_json())

# convert the object into a dict
close_deposit_account_request_dict = close_deposit_account_request_instance.to_dict()
# create an instance of CloseDepositAccountRequest from a dict
close_deposit_account_request_from_dict = CloseDepositAccountRequest.from_dict(close_deposit_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


