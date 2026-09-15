# ACHCounterpartyAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**name** | **str** | The account holder&#39;s name (whether an individual or a business). | 
**routing_number** | **str** | Valid 9-digit ABA routing transit number. | 
**bank** | **str** | Name of the bank. | 
**account_number** | **str** | Bank account number. | 
**account_type** | **str** | Either Checking, Savings or Loan. | 
**type** | **str** | Either Business, Person or Unknown. | 
**permissions** | **str** | Either CreditOnly or CreditAndDebit. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_counterparty_attributes import ACHCounterpartyAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ACHCounterpartyAttributes from a JSON string
ach_counterparty_attributes_instance = ACHCounterpartyAttributes.from_json(json)
# print the JSON string representation of the object
print(ACHCounterpartyAttributes.to_json())

# convert the object into a dict
ach_counterparty_attributes_dict = ach_counterparty_attributes_instance.to_dict()
# create an instance of ACHCounterpartyAttributes from a dict
ach_counterparty_attributes_from_dict = ACHCounterpartyAttributes.from_dict(ach_counterparty_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


