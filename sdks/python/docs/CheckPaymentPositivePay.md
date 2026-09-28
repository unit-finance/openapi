# CheckPaymentPositivePay

`Check Payment Positive Pay` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckPaymentPositivePayAttributes**](CheckPaymentPositivePayAttributes.md) |  | 
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.check_payment_positive_pay import CheckPaymentPositivePay

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPaymentPositivePay from a JSON string
check_payment_positive_pay_instance = CheckPaymentPositivePay.from_json(json)
# print the JSON string representation of the object
print(CheckPaymentPositivePay.to_json())

# convert the object into a dict
check_payment_positive_pay_dict = check_payment_positive_pay_instance.to_dict()
# create an instance of CheckPaymentPositivePay from a dict
check_payment_positive_pay_from_dict = CheckPaymentPositivePay.from_dict(check_payment_positive_pay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


