# CreateDepositAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateDepositAccountData**](CreateDepositAccountData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_deposit_account_request import CreateDepositAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDepositAccountRequest from a JSON string
create_deposit_account_request_instance = CreateDepositAccountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDepositAccountRequest.to_json())

# convert the object into a dict
create_deposit_account_request_dict = create_deposit_account_request_instance.to_dict()
# create an instance of CreateDepositAccountRequest from a dict
create_deposit_account_request_from_dict = CreateDepositAccountRequest.from_dict(create_deposit_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


