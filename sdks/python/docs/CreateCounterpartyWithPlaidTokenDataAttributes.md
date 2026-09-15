# CreateCounterpartyWithPlaidTokenDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Either Business, Person or Unknown | 
**name** | **str** | The account holder&#39;s name (whether an individual or a business). | 
**plaid_processor_token** | **str** | Plaid integration token&lt;br /&gt;See Plaid processor token | 
**verify_name** | **bool** | Optional, default to false. Verify a match between the name of the counterparty and the name of the external account&#39;s owner as provided by Plaid. If the name verification fails the request will fail with code field set to NameVerificationFailed. | [optional] 
**permissions** | **str** | Optional, custom counterparty permissions. Either CreditOnly, DebitOnly, CreditAndDebit. Default is CreditAndDebit. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**idempotency_key** | **str** | See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_counterparty_with_plaid_token_data_attributes import CreateCounterpartyWithPlaidTokenDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCounterpartyWithPlaidTokenDataAttributes from a JSON string
create_counterparty_with_plaid_token_data_attributes_instance = CreateCounterpartyWithPlaidTokenDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCounterpartyWithPlaidTokenDataAttributes.to_json())

# convert the object into a dict
create_counterparty_with_plaid_token_data_attributes_dict = create_counterparty_with_plaid_token_data_attributes_instance.to_dict()
# create an instance of CreateCounterpartyWithPlaidTokenDataAttributes from a dict
create_counterparty_with_plaid_token_data_attributes_from_dict = CreateCounterpartyWithPlaidTokenDataAttributes.from_dict(create_counterparty_with_plaid_token_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


