# ACHCounterparty

`ACHCounterparty` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ACHCounterpartyAttributes**](ACHCounterpartyAttributes.md) |  | 
**relationships** | [**CreditAccountRelationships**](CreditAccountRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_counterparty import ACHCounterparty

# TODO update the JSON string below
json = "{}"
# create an instance of ACHCounterparty from a JSON string
ach_counterparty_instance = ACHCounterparty.from_json(json)
# print the JSON string representation of the object
print(ACHCounterparty.to_json())

# convert the object into a dict
ach_counterparty_dict = ach_counterparty_instance.to_dict()
# create an instance of ACHCounterparty from a dict
ach_counterparty_from_dict = ACHCounterparty.from_dict(ach_counterparty_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


