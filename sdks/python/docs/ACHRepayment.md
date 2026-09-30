# ACHRepayment

`achRepayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ACHRepaymentAttributes**](ACHRepaymentAttributes.md) |  | 
**relationships** | [**ACHRepaymentRelationships**](ACHRepaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_repayment import ACHRepayment

# TODO update the JSON string below
json = "{}"
# create an instance of ACHRepayment from a JSON string
ach_repayment_instance = ACHRepayment.from_json(json)
# print the JSON string representation of the object
print(ACHRepayment.to_json())

# convert the object into a dict
ach_repayment_dict = ach_repayment_instance.to_dict()
# create an instance of ACHRepayment from a dict
ach_repayment_from_dict = ACHRepayment.from_dict(ach_repayment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


