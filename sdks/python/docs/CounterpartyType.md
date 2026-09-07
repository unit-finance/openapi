# CounterpartyType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routing_number** | **str** | Valid 9-digit ABA routing transit number. | 
**account_number** | **str** | Bank account number. | 
**account_type** | **str** | Either Checking, Savings or Loan. | 
**name** | **str** | Name of the person or company that owns the bank account. | 

## Example

```python
from unit_finance_sdk.models.counterparty_type import CounterpartyType

# TODO update the JSON string below
json = "{}"
# create an instance of CounterpartyType from a JSON string
counterparty_type_instance = CounterpartyType.from_json(json)
# print the JSON string representation of the object
print(CounterpartyType.to_json())

# convert the object into a dict
counterparty_type_dict = counterparty_type_instance.to_dict()
# create an instance of CounterpartyType from a dict
counterparty_type_from_dict = CounterpartyType.from_dict(counterparty_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


