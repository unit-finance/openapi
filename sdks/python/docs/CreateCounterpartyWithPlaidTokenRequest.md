# CreateCounterpartyWithPlaidTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCounterpartyWithPlaidTokenData**](CreateCounterpartyWithPlaidTokenData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_counterparty_with_plaid_token_request import CreateCounterpartyWithPlaidTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCounterpartyWithPlaidTokenRequest from a JSON string
create_counterparty_with_plaid_token_request_instance = CreateCounterpartyWithPlaidTokenRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCounterpartyWithPlaidTokenRequest.to_json())

# convert the object into a dict
create_counterparty_with_plaid_token_request_dict = create_counterparty_with_plaid_token_request_instance.to_dict()
# create an instance of CreateCounterpartyWithPlaidTokenRequest from a dict
create_counterparty_with_plaid_token_request_from_dict = CreateCounterpartyWithPlaidTokenRequest.from_dict(create_counterparty_with_plaid_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


