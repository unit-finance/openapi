# CloseCreditAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CloseCreditAccountData**](CloseCreditAccountData.md) |  | 

## Example

```python
from unit_finance_sdk.models.close_credit_account_request import CloseCreditAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloseCreditAccountRequest from a JSON string
close_credit_account_request_instance = CloseCreditAccountRequest.from_json(json)
# print the JSON string representation of the object
print(CloseCreditAccountRequest.to_json())

# convert the object into a dict
close_credit_account_request_dict = close_credit_account_request_instance.to_dict()
# create an instance of CloseCreditAccountRequest from a dict
close_credit_account_request_from_dict = CloseCreditAccountRequest.from_dict(close_credit_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


