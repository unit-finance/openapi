# CounterpartyBalanceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counterparty** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.counterparty_balance_relationships import CounterpartyBalanceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CounterpartyBalanceRelationships from a JSON string
counterparty_balance_relationships_instance = CounterpartyBalanceRelationships.from_json(json)
# print the JSON string representation of the object
print(CounterpartyBalanceRelationships.to_json())

# convert the object into a dict
counterparty_balance_relationships_dict = counterparty_balance_relationships_instance.to_dict()
# create an instance of CounterpartyBalanceRelationships from a dict
counterparty_balance_relationships_from_dict = CounterpartyBalanceRelationships.from_dict(counterparty_balance_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


