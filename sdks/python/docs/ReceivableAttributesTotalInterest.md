# ReceivableAttributesTotalInterest

JSON Object holding the interest of the receivable: charged (Integer, cents) is the interest charged so far and accrued (decimal String, cents) is the interest accrued so far.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charged** | **int** | The interest charged so far, in cents. | [optional] 
**accrued** | **str** | The interest accrued so far, in cents, as a decimal string. | [optional] 

## Example

```python
from unit_finance_sdk.models.receivable_attributes_total_interest import ReceivableAttributesTotalInterest

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivableAttributesTotalInterest from a JSON string
receivable_attributes_total_interest_instance = ReceivableAttributesTotalInterest.from_json(json)
# print the JSON string representation of the object
print(ReceivableAttributesTotalInterest.to_json())

# convert the object into a dict
receivable_attributes_total_interest_dict = receivable_attributes_total_interest_instance.to_dict()
# create an instance of ReceivableAttributesTotalInterest from a dict
receivable_attributes_total_interest_from_dict = ReceivableAttributesTotalInterest.from_dict(receivable_attributes_total_interest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


