# CheckPayment

`CheckPayment` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckPaymentAttributes**](CheckPaymentAttributes.md) |  | 
**relationships** | [**CheckDepositRelationships**](CheckDepositRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.check_payment import CheckPayment

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPayment from a JSON string
check_payment_instance = CheckPayment.from_json(json)
# print the JSON string representation of the object
print(CheckPayment.to_json())

# convert the object into a dict
check_payment_dict = check_payment_instance.to_dict()
# create an instance of CheckPayment from a dict
check_payment_from_dict = CheckPayment.from_dict(check_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


