# UpdateCreditAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateCreditAccountData**](UpdateCreditAccountData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_credit_account_request import UpdateCreditAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCreditAccountRequest from a JSON string
update_credit_account_request_instance = UpdateCreditAccountRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCreditAccountRequest.to_json())

# convert the object into a dict
update_credit_account_request_dict = update_credit_account_request_instance.to_dict()
# create an instance of UpdateCreditAccountRequest from a dict
update_credit_account_request_from_dict = UpdateCreditAccountRequest.from_dict(update_credit_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


