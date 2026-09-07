# IndividualDebitCard

`IndividualDebitCard` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**IndividualDebitCardAttributes**](IndividualDebitCardAttributes.md) |  | 
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.individual_debit_card import IndividualDebitCard

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualDebitCard from a JSON string
individual_debit_card_instance = IndividualDebitCard.from_json(json)
# print the JSON string representation of the object
print(IndividualDebitCard.to_json())

# convert the object into a dict
individual_debit_card_dict = individual_debit_card_instance.to_dict()
# create an instance of IndividualDebitCard from a dict
individual_debit_card_from_dict = IndividualDebitCard.from_dict(individual_debit_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


