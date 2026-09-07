# IndividualVirtualDebitCard

`IndividualVirtualDebitCard` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**IndividualVirtualDebitCardAttributes**](IndividualVirtualDebitCardAttributes.md) |  | 
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.individual_virtual_debit_card import IndividualVirtualDebitCard

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualVirtualDebitCard from a JSON string
individual_virtual_debit_card_instance = IndividualVirtualDebitCard.from_json(json)
# print the JSON string representation of the object
print(IndividualVirtualDebitCard.to_json())

# convert the object into a dict
individual_virtual_debit_card_dict = individual_virtual_debit_card_instance.to_dict()
# create an instance of IndividualVirtualDebitCard from a dict
individual_virtual_debit_card_from_dict = IndividualVirtualDebitCard.from_dict(individual_virtual_debit_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


