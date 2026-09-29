# Receivable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ReceivableAttributes**](ReceivableAttributes.md) |  | 
**relationships** | [**ReceivableRelationships**](ReceivableRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.receivable import Receivable

# TODO update the JSON string below
json = "{}"
# create an instance of Receivable from a JSON string
receivable_instance = Receivable.from_json(json)
# print the JSON string representation of the object
print(Receivable.to_json())

# convert the object into a dict
receivable_dict = receivable_instance.to_dict()
# create an instance of Receivable from a dict
receivable_from_dict = Receivable.from_dict(receivable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


