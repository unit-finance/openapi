# BusinessDebitCard

`BusinessDebitCard` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BusinessDebitCardAttributes**](BusinessDebitCardAttributes.md) |  | 
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.business_debit_card import BusinessDebitCard

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessDebitCard from a JSON string
business_debit_card_instance = BusinessDebitCard.from_json(json)
# print the JSON string representation of the object
print(BusinessDebitCard.to_json())

# convert the object into a dict
business_debit_card_dict = business_debit_card_instance.to_dict()
# create an instance of BusinessDebitCard from a dict
business_debit_card_from_dict = BusinessDebitCard.from_dict(business_debit_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


