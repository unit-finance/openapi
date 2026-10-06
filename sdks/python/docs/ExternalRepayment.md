# ExternalRepayment

`externalRepayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ExternalRepaymentAttributes**](ExternalRepaymentAttributes.md) |  | 
**relationships** | [**ExternalRepaymentRelationships**](ExternalRepaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.external_repayment import ExternalRepayment

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalRepayment from a JSON string
external_repayment_instance = ExternalRepayment.from_json(json)
# print the JSON string representation of the object
print(ExternalRepayment.to_json())

# convert the object into a dict
external_repayment_dict = external_repayment_instance.to_dict()
# create an instance of ExternalRepayment from a dict
external_repayment_from_dict = ExternalRepayment.from_dict(external_repayment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


