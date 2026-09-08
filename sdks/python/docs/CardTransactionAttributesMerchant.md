# CardTransactionAttributesMerchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the merchant. | [optional] 
**type** | **int** | The 4-digit ISO 18245 merchant category code (MCC). | [optional] 
**category** | **str** | The merchant category, described by the MCC code (see this reference for the list of category descriptions). | [optional] 
**location** | **str** | The location (city, state, etc.) of the merchant. | [optional] 
**id** | **str** | The unique network merchant identifier. | [optional] 

## Example

```python
from unit_finance_sdk.models.card_transaction_attributes_merchant import CardTransactionAttributesMerchant

# TODO update the JSON string below
json = "{}"
# create an instance of CardTransactionAttributesMerchant from a JSON string
card_transaction_attributes_merchant_instance = CardTransactionAttributesMerchant.from_json(json)
# print the JSON string representation of the object
print(CardTransactionAttributesMerchant.to_json())

# convert the object into a dict
card_transaction_attributes_merchant_dict = card_transaction_attributes_merchant_instance.to_dict()
# create an instance of CardTransactionAttributesMerchant from a dict
card_transaction_attributes_merchant_from_dict = CardTransactionAttributesMerchant.from_dict(card_transaction_attributes_merchant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


