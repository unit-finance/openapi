# BusinessVirtualCreditCard

`BusinessVirtualCreditCard` is a JSON:API resource returned by the Create Business Virtual Credit Card operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | **Dict[str, object]** | Attributes of the business virtual credit card. | 
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.business_virtual_credit_card import BusinessVirtualCreditCard

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessVirtualCreditCard from a JSON string
business_virtual_credit_card_instance = BusinessVirtualCreditCard.from_json(json)
# print the JSON string representation of the object
print(BusinessVirtualCreditCard.to_json())

# convert the object into a dict
business_virtual_credit_card_dict = business_virtual_credit_card_instance.to_dict()
# create an instance of BusinessVirtualCreditCard from a dict
business_virtual_credit_card_from_dict = BusinessVirtualCreditCard.from_dict(business_virtual_credit_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


