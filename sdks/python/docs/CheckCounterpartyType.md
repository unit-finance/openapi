# CheckCounterpartyType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routing_number** | **str** | Valid 9-digit ABA routing transit number. | 
**account_number** | **str** | Bank account number. | 
**name** | **str** | Name of the person or company that owns the bank account. | 

## Example

```python
from unit_finance_sdk.models.check_counterparty_type import CheckCounterpartyType

# TODO update the JSON string below
json = "{}"
# create an instance of CheckCounterpartyType from a JSON string
check_counterparty_type_instance = CheckCounterpartyType.from_json(json)
# print the JSON string representation of the object
print(CheckCounterpartyType.to_json())

# convert the object into a dict
check_counterparty_type_dict = check_counterparty_type_instance.to_dict()
# create an instance of CheckCounterpartyType from a dict
check_counterparty_type_from_dict = CheckCounterpartyType.from_dict(check_counterparty_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


