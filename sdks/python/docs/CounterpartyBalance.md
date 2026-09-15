# CounterpartyBalance

`CounterpartyBalance` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CounterpartyBalanceAttributes**](CounterpartyBalanceAttributes.md) |  | 
**relationships** | [**CounterpartyBalanceRelationships**](CounterpartyBalanceRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.counterparty_balance import CounterpartyBalance

# TODO update the JSON string below
json = "{}"
# create an instance of CounterpartyBalance from a JSON string
counterparty_balance_instance = CounterpartyBalance.from_json(json)
# print the JSON string representation of the object
print(CounterpartyBalance.to_json())

# convert the object into a dict
counterparty_balance_dict = counterparty_balance_instance.to_dict()
# create an instance of CounterpartyBalance from a dict
counterparty_balance_from_dict = CounterpartyBalance.from_dict(counterparty_balance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


