# GenerateCashDepositBarcodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**GenerateBarcodeData**](GenerateBarcodeData.md) |  | 

## Example

```python
from unit_finance_sdk.models.generate_cash_deposit_barcode_request import GenerateCashDepositBarcodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateCashDepositBarcodeRequest from a JSON string
generate_cash_deposit_barcode_request_instance = GenerateCashDepositBarcodeRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateCashDepositBarcodeRequest.to_json())

# convert the object into a dict
generate_cash_deposit_barcode_request_dict = generate_cash_deposit_barcode_request_instance.to_dict()
# create an instance of GenerateCashDepositBarcodeRequest from a dict
generate_cash_deposit_barcode_request_from_dict = GenerateCashDepositBarcodeRequest.from_dict(generate_cash_deposit_barcode_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


