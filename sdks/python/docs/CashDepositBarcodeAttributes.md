# CashDepositBarcodeAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode_number** | **str** | Unique identifier of the barcode. This field will be used in Get Barcode Image by Barcode Number endpoint. | 
**expiration** | **datetime** | The expiration date and time of the barcode. | 
**store_id** | **str** | Identifier of the retail store that supports Cash Deposits. This field is obtained from either List by coordinates or List by postal code endpoints. | 
**retailer_name** | **str** | Name of the retailer store that supports Cash Deposits. | 

## Example

```python
from unit_finance_sdk.models.cash_deposit_barcode_attributes import CashDepositBarcodeAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CashDepositBarcodeAttributes from a JSON string
cash_deposit_barcode_attributes_instance = CashDepositBarcodeAttributes.from_json(json)
# print the JSON string representation of the object
print(CashDepositBarcodeAttributes.to_json())

# convert the object into a dict
cash_deposit_barcode_attributes_dict = cash_deposit_barcode_attributes_instance.to_dict()
# create an instance of CashDepositBarcodeAttributes from a dict
cash_deposit_barcode_attributes_from_dict = CashDepositBarcodeAttributes.from_dict(cash_deposit_barcode_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


