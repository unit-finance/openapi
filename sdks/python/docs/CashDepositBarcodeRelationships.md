# CashDepositBarcodeRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.cash_deposit_barcode_relationships import CashDepositBarcodeRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CashDepositBarcodeRelationships from a JSON string
cash_deposit_barcode_relationships_instance = CashDepositBarcodeRelationships.from_json(json)
# print the JSON string representation of the object
print(CashDepositBarcodeRelationships.to_json())

# convert the object into a dict
cash_deposit_barcode_relationships_dict = cash_deposit_barcode_relationships_instance.to_dict()
# create an instance of CashDepositBarcodeRelationships from a dict
cash_deposit_barcode_relationships_from_dict = CashDepositBarcodeRelationships.from_dict(cash_deposit_barcode_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


