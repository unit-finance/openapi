# CreateCreditAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCreditAccountData**](CreateCreditAccountData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_credit_account_request import CreateCreditAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCreditAccountRequest from a JSON string
create_credit_account_request_instance = CreateCreditAccountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCreditAccountRequest.to_json())

# convert the object into a dict
create_credit_account_request_dict = create_credit_account_request_instance.to_dict()
# create an instance of CreateCreditAccountRequest from a dict
create_credit_account_request_from_dict = CreateCreditAccountRequest.from_dict(create_credit_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


