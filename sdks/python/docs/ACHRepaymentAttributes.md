# ACHRepaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | 
**amount** | **int** | The amount (cents) of the payment. | 
**status** | **str** | Either Pending, PendingReview, Returned, Sent or Rejected | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_repayment_attributes import ACHRepaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ACHRepaymentAttributes from a JSON string
ach_repayment_attributes_instance = ACHRepaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(ACHRepaymentAttributes.to_json())

# convert the object into a dict
ach_repayment_attributes_dict = ach_repayment_attributes_instance.to_dict()
# create an instance of ACHRepaymentAttributes from a dict
ach_repayment_attributes_from_dict = ACHRepaymentAttributes.from_dict(ach_repayment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


