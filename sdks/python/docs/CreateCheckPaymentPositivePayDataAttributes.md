# CreateCheckPaymentPositivePayDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_number** | **str** | Check number to authorize. | 
**amount** | **int** | Expected amount in cents. Must match within 1$ tolerance. | 
**payee_name** | **str** | Payee name to add specificity. | [optional] 
**expiration_date** | **date** | When the authorization expires. | [optional] 
**tags** | **Dict[str, object]** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_check_payment_positive_pay_data_attributes import CreateCheckPaymentPositivePayDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckPaymentPositivePayDataAttributes from a JSON string
create_check_payment_positive_pay_data_attributes_instance = CreateCheckPaymentPositivePayDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCheckPaymentPositivePayDataAttributes.to_json())

# convert the object into a dict
create_check_payment_positive_pay_data_attributes_dict = create_check_payment_positive_pay_data_attributes_instance.to_dict()
# create an instance of CreateCheckPaymentPositivePayDataAttributes from a dict
create_check_payment_positive_pay_data_attributes_from_dict = CreateCheckPaymentPositivePayDataAttributes.from_dict(create_check_payment_positive_pay_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


