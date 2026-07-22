# UpdateDepositAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateDepositAccountData**](UpdateDepositAccountData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_deposit_account_request import UpdateDepositAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDepositAccountRequest from a JSON string
update_deposit_account_request_instance = UpdateDepositAccountRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDepositAccountRequest.to_json())

# convert the object into a dict
update_deposit_account_request_dict = update_deposit_account_request_instance.to_dict()
# create an instance of UpdateDepositAccountRequest from a dict
update_deposit_account_request_from_dict = UpdateDepositAccountRequest.from_dict(update_deposit_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


