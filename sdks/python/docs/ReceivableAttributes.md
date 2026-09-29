# ReceivableAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | 
**original_amount** | **int** | The original amount of the receivable that need to be repaid. | 
**remaining_amount** | **int** | The remaining amount of the receivable that need to be repaid. | 
**repayment_status** | [**ReceivableAttributesRepaymentStatus**](ReceivableAttributesRepaymentStatus.md) |  | 
**purchase_due_date** | **date** | The date the receivable is due e.g. 2024-12-31. | [optional] 
**purchased_timestamp** | **datetime** | The date the receivable was purchased | [optional] 
**capital_partner_id** | **str** | The capital partner id | [optional] 

## Example

```python
from unit_finance_sdk.models.receivable_attributes import ReceivableAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivableAttributes from a JSON string
receivable_attributes_instance = ReceivableAttributes.from_json(json)
# print the JSON string representation of the object
print(ReceivableAttributes.to_json())

# convert the object into a dict
receivable_attributes_dict = receivable_attributes_instance.to_dict()
# create an instance of ReceivableAttributes from a dict
receivable_attributes_from_dict = ReceivableAttributes.from_dict(receivable_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


