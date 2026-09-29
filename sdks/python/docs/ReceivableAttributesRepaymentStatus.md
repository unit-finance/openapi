# ReceivableAttributesRepaymentStatus

JSON Object representing The status of the repayment and last repayment timestamp. The value of the repayment status can be one of the following notRepaid, partiallyRepaid, fullyRepaid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The status of the repayment, one of &#x60;notRepaid&#x60;, &#x60;partiallyRepaid&#x60;, &#x60;fullyRepaid&#x60;. | [optional] 

## Example

```python
from unit_finance_sdk.models.receivable_attributes_repayment_status import ReceivableAttributesRepaymentStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivableAttributesRepaymentStatus from a JSON string
receivable_attributes_repayment_status_instance = ReceivableAttributesRepaymentStatus.from_json(json)
# print the JSON string representation of the object
print(ReceivableAttributesRepaymentStatus.to_json())

# convert the object into a dict
receivable_attributes_repayment_status_dict = receivable_attributes_repayment_status_instance.to_dict()
# create an instance of ReceivableAttributesRepaymentStatus from a dict
receivable_attributes_repayment_status_from_dict = ReceivableAttributesRepaymentStatus.from_dict(receivable_attributes_repayment_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


