# CheckStopPayment

`checkStopPayment` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckStopPaymentAttributes**](CheckStopPaymentAttributes.md) |  | 
**relationships** | [**CheckStopPaymentRelationships**](CheckStopPaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.check_stop_payment import CheckStopPayment

# TODO update the JSON string below
json = "{}"
# create an instance of CheckStopPayment from a JSON string
check_stop_payment_instance = CheckStopPayment.from_json(json)
# print the JSON string representation of the object
print(CheckStopPayment.to_json())

# convert the object into a dict
check_stop_payment_dict = check_stop_payment_instance.to_dict()
# create an instance of CheckStopPayment from a dict
check_stop_payment_from_dict = CheckStopPayment.from_dict(check_stop_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


