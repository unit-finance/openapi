# ACHPayment

`AchPayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ACHPaymentAttributes**](ACHPaymentAttributes.md) |  | 
**relationships** | [**ACHPaymentRelationships**](ACHPaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_payment import ACHPayment

# TODO update the JSON string below
json = "{}"
# create an instance of ACHPayment from a JSON string
ach_payment_instance = ACHPayment.from_json(json)
# print the JSON string representation of the object
print(ACHPayment.to_json())

# convert the object into a dict
ach_payment_dict = ach_payment_instance.to_dict()
# create an instance of ACHPayment from a dict
ach_payment_from_dict = ACHPayment.from_dict(ach_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


