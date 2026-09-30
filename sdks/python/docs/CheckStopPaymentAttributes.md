# CheckStopPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | 
**amount** | **int** | The amount (cents) of the check payment. | [optional] 
**status** | **str** | The status of the stop payment, one of Active or Disabled. | 
**check_number** | **str** | The checkNumber of the check payments that the stop payment operation will be applied to. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.check_stop_payment_attributes import CheckStopPaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CheckStopPaymentAttributes from a JSON string
check_stop_payment_attributes_instance = CheckStopPaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(CheckStopPaymentAttributes.to_json())

# convert the object into a dict
check_stop_payment_attributes_dict = check_stop_payment_attributes_instance.to_dict()
# create an instance of CheckStopPaymentAttributes from a dict
check_stop_payment_attributes_from_dict = CheckStopPaymentAttributes.from_dict(check_stop_payment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


