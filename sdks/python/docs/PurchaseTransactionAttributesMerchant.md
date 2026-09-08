# PurchaseTransactionAttributesMerchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the merchant. | 
**type** | **int** | The 4-digit ISO 18245 merchant category code (MCC). | 
**category** | **str** | The merchant category, described by the MCC code (see this reference for the list of category descriptions). | 
**location** | **str** | The location (city, state, etc.) of the merchant. | [optional] 
**id** | **str** | The unique network merchant identifier. | [optional] 

## Example

```python
from unit_finance_sdk.models.purchase_transaction_attributes_merchant import PurchaseTransactionAttributesMerchant

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseTransactionAttributesMerchant from a JSON string
purchase_transaction_attributes_merchant_instance = PurchaseTransactionAttributesMerchant.from_json(json)
# print the JSON string representation of the object
print(PurchaseTransactionAttributesMerchant.to_json())

# convert the object into a dict
purchase_transaction_attributes_merchant_dict = purchase_transaction_attributes_merchant_instance.to_dict()
# create an instance of PurchaseTransactionAttributesMerchant from a dict
purchase_transaction_attributes_merchant_from_dict = PurchaseTransactionAttributesMerchant.from_dict(purchase_transaction_attributes_merchant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


