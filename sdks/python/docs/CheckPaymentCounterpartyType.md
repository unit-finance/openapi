# CheckPaymentCounterpartyType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the person or company that owns the bank account. Cannot exceed 40 characters. | 
**address** | [**AddressType**](AddressType.md) | The payee&#39;s address. The length of street and street2 combined cannot exceed 50 characters. | 
**counterparty_moved** | **bool** | True if the counterparty&#39;s address has been modified to correspond with a National Change of Address applied on the address. See guide for further information. | [optional] 

## Example

```python
from unit_finance_sdk.models.check_payment_counterparty_type import CheckPaymentCounterpartyType

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPaymentCounterpartyType from a JSON string
check_payment_counterparty_type_instance = CheckPaymentCounterpartyType.from_json(json)
# print the JSON string representation of the object
print(CheckPaymentCounterpartyType.to_json())

# convert the object into a dict
check_payment_counterparty_type_dict = check_payment_counterparty_type_instance.to_dict()
# create an instance of CheckPaymentCounterpartyType from a dict
check_payment_counterparty_type_from_dict = CheckPaymentCounterpartyType.from_dict(check_payment_counterparty_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


