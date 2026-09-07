# BusinessCreditCard

`BusinessCreditCard` is a JSON:API resource returned by the Create Business Credit Card operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | **Dict[str, object]** | Attributes of the business credit card. | 
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.business_credit_card import BusinessCreditCard

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCreditCard from a JSON string
business_credit_card_instance = BusinessCreditCard.from_json(json)
# print the JSON string representation of the object
print(BusinessCreditCard.to_json())

# convert the object into a dict
business_credit_card_dict = business_credit_card_instance.to_dict()
# create an instance of BusinessCreditCard from a dict
business_credit_card_from_dict = BusinessCreditCard.from_dict(business_credit_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


