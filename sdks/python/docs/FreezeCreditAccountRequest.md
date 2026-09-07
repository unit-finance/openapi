# FreezeCreditAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**FreezeCreditAccountData**](FreezeCreditAccountData.md) |  | 

## Example

```python
from unit_finance_sdk.models.freeze_credit_account_request import FreezeCreditAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeCreditAccountRequest from a JSON string
freeze_credit_account_request_instance = FreezeCreditAccountRequest.from_json(json)
# print the JSON string representation of the object
print(FreezeCreditAccountRequest.to_json())

# convert the object into a dict
freeze_credit_account_request_dict = freeze_credit_account_request_instance.to_dict()
# create an instance of FreezeCreditAccountRequest from a dict
freeze_credit_account_request_from_dict = FreezeCreditAccountRequest.from_dict(freeze_credit_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


