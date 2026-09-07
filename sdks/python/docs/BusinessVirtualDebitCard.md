# BusinessVirtualDebitCard

`BusinessVirtualDebitCard` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BusinessVirtualDebitCardAttributes**](BusinessVirtualDebitCardAttributes.md) |  | 
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.business_virtual_debit_card import BusinessVirtualDebitCard

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessVirtualDebitCard from a JSON string
business_virtual_debit_card_instance = BusinessVirtualDebitCard.from_json(json)
# print the JSON string representation of the object
print(BusinessVirtualDebitCard.to_json())

# convert the object into a dict
business_virtual_debit_card_dict = business_virtual_debit_card_instance.to_dict()
# create an instance of BusinessVirtualDebitCard from a dict
business_virtual_debit_card_from_dict = BusinessVirtualDebitCard.from_dict(business_virtual_debit_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


