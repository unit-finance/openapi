# CheckPaymentPositivePayAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | One of Active, Expired, or Cancelled. | 
**check_number** | **str** | Check number to authorize. | 
**payee_name** | **str** | Payee name to add specificity. | [optional] 
**amount** | **int** | Expected amount in cents. | 
**expiration_date** | **date** | When the authorization expires. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.check_payment_positive_pay_attributes import CheckPaymentPositivePayAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPaymentPositivePayAttributes from a JSON string
check_payment_positive_pay_attributes_instance = CheckPaymentPositivePayAttributes.from_json(json)
# print the JSON string representation of the object
print(CheckPaymentPositivePayAttributes.to_json())

# convert the object into a dict
check_payment_positive_pay_attributes_dict = check_payment_positive_pay_attributes_instance.to_dict()
# create an instance of CheckPaymentPositivePayAttributes from a dict
check_payment_positive_pay_attributes_from_dict = CheckPaymentPositivePayAttributes.from_dict(check_payment_positive_pay_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


