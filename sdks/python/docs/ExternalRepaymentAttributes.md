# ExternalRepaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | 
**amount** | **int** | The amount (cents) of the repayment. | 
**status** | **str** | The status of the external repayment. One of Sent or Returned. | 
**description** | **str** | Repayment description. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.external_repayment_attributes import ExternalRepaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalRepaymentAttributes from a JSON string
external_repayment_attributes_instance = ExternalRepaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(ExternalRepaymentAttributes.to_json())

# convert the object into a dict
external_repayment_attributes_dict = external_repayment_attributes_instance.to_dict()
# create an instance of ExternalRepaymentAttributes from a dict
external_repayment_attributes_from_dict = ExternalRepaymentAttributes.from_dict(external_repayment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


