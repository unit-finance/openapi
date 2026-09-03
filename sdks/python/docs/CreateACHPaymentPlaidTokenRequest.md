# CreateACHPaymentPlaidTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateACHPaymentPlaidTokenData**](CreateACHPaymentPlaidTokenData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_ach_payment_plaid_token_request import CreateACHPaymentPlaidTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHPaymentPlaidTokenRequest from a JSON string
create_ach_payment_plaid_token_request_instance = CreateACHPaymentPlaidTokenRequest.from_json(json)
# print the JSON string representation of the object
print(CreateACHPaymentPlaidTokenRequest.to_json())

# convert the object into a dict
create_ach_payment_plaid_token_request_dict = create_ach_payment_plaid_token_request_instance.to_dict()
# create an instance of CreateACHPaymentPlaidTokenRequest from a dict
create_ach_payment_plaid_token_request_from_dict = CreateACHPaymentPlaidTokenRequest.from_dict(create_ach_payment_plaid_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


