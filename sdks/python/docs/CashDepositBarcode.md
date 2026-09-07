# CashDepositBarcode

`CashDepositBarcode` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | [optional] 
**attributes** | [**CashDepositBarcodeAttributes**](CashDepositBarcodeAttributes.md) |  | 
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.cash_deposit_barcode import CashDepositBarcode

# TODO update the JSON string below
json = "{}"
# create an instance of CashDepositBarcode from a JSON string
cash_deposit_barcode_instance = CashDepositBarcode.from_json(json)
# print the JSON string representation of the object
print(CashDepositBarcode.to_json())

# convert the object into a dict
cash_deposit_barcode_dict = cash_deposit_barcode_instance.to_dict()
# create an instance of CashDepositBarcode from a dict
cash_deposit_barcode_from_dict = CashDepositBarcode.from_dict(cash_deposit_barcode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


