# CreateCounterpartyDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The account holder&#39;s name (whether an individual or a business, maximum of 50 characters). | 
**routing_number** | **str** | Valid 9-digit ABA routing transit number. | 
**account_number** | **str** | Bank account number. | 
**account_type** | **str** | (defaults to checking). Either Checking, Savings or Loan. | 
**type** | **str** | Either Business, Person or Unknown. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**permissions** | **str** | Optional, custom counterparty permissions. Only DebitOnly or CreditAndDebit are valid values when using the permissions&#39; attribute. &#39;CreditOnly&#39; will be assigned as default value when permissions attribute is not declared. If the account and routing number of the counterparty belong to an account under your org on Unit, you may specify \&quot;CreditAndDebit\&quot; or \&quot;DebitOnly\&quot; permissions as well. | [optional] 
**idempotency_key** | **str** | See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_counterparty_data_attributes import CreateCounterpartyDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCounterpartyDataAttributes from a JSON string
create_counterparty_data_attributes_instance = CreateCounterpartyDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCounterpartyDataAttributes.to_json())

# convert the object into a dict
create_counterparty_data_attributes_dict = create_counterparty_data_attributes_instance.to_dict()
# create an instance of CreateCounterpartyDataAttributes from a dict
create_counterparty_data_attributes_from_dict = CreateCounterpartyDataAttributes.from_dict(create_counterparty_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


