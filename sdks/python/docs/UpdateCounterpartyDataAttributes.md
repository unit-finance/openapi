# UpdateCounterpartyDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plaid_processor_token** | **str** | Optional, unless updating a Plaid counterparty. Plaid integration token&lt;br /&gt;See Plaid processor token | [optional] 
**verify_name** | **bool** | Optional, default to false. Verify the name of the counterparty, if the name verification fails the request will fail with code field set to NameVerificationFailed. | [optional] 
**permissions** | **str** | Optional, custom counterparty permissions. Either CreditOnly, DebitOnly, CreditAndDebit. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_counterparty_data_attributes import UpdateCounterpartyDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCounterpartyDataAttributes from a JSON string
update_counterparty_data_attributes_instance = UpdateCounterpartyDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateCounterpartyDataAttributes.to_json())

# convert the object into a dict
update_counterparty_data_attributes_dict = update_counterparty_data_attributes_instance.to_dict()
# create an instance of UpdateCounterpartyDataAttributes from a dict
update_counterparty_data_attributes_from_dict = UpdateCounterpartyDataAttributes.from_dict(update_counterparty_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


