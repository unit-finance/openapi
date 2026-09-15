# CounterpartyBalanceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **float** | The current balance amount (in cents) of the counterparty. | 
**available** | **float** | The available balance amount (in cents) of the counterparty. | [optional] 

## Example

```python
from unit_finance_sdk.models.counterparty_balance_attributes import CounterpartyBalanceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CounterpartyBalanceAttributes from a JSON string
counterparty_balance_attributes_instance = CounterpartyBalanceAttributes.from_json(json)
# print the JSON string representation of the object
print(CounterpartyBalanceAttributes.to_json())

# convert the object into a dict
counterparty_balance_attributes_dict = counterparty_balance_attributes_instance.to_dict()
# create an instance of CounterpartyBalanceAttributes from a dict
counterparty_balance_attributes_from_dict = CounterpartyBalanceAttributes.from_dict(counterparty_balance_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


