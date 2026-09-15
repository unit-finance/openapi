# CreateCounterpartyWithPlaidTokenData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateCounterpartyWithPlaidTokenDataAttributes**](CreateCounterpartyWithPlaidTokenDataAttributes.md) |  | 
**relationships** | [**CreateDepositAccountDataRelationships**](CreateDepositAccountDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_counterparty_with_plaid_token_data import CreateCounterpartyWithPlaidTokenData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCounterpartyWithPlaidTokenData from a JSON string
create_counterparty_with_plaid_token_data_instance = CreateCounterpartyWithPlaidTokenData.from_json(json)
# print the JSON string representation of the object
print(CreateCounterpartyWithPlaidTokenData.to_json())

# convert the object into a dict
create_counterparty_with_plaid_token_data_dict = create_counterparty_with_plaid_token_data_instance.to_dict()
# create an instance of CreateCounterpartyWithPlaidTokenData from a dict
create_counterparty_with_plaid_token_data_from_dict = CreateCounterpartyWithPlaidTokenData.from_dict(create_counterparty_with_plaid_token_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


