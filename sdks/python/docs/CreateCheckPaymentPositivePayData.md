# CreateCheckPaymentPositivePayData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateCheckPaymentPositivePayDataAttributes**](CreateCheckPaymentPositivePayDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_check_payment_positive_pay_data import CreateCheckPaymentPositivePayData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckPaymentPositivePayData from a JSON string
create_check_payment_positive_pay_data_instance = CreateCheckPaymentPositivePayData.from_json(json)
# print the JSON string representation of the object
print(CreateCheckPaymentPositivePayData.to_json())

# convert the object into a dict
create_check_payment_positive_pay_data_dict = create_check_payment_positive_pay_data_instance.to_dict()
# create an instance of CreateCheckPaymentPositivePayData from a dict
create_check_payment_positive_pay_data_from_dict = CreateCheckPaymentPositivePayData.from_dict(create_check_payment_positive_pay_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


