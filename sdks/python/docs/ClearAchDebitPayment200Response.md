# ClearAchDebitPayment200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ACHPayment**](ACHPayment.md) |  | 

## Example

```python
from unit_finance_sdk.models.clear_ach_debit_payment200_response import ClearAchDebitPayment200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ClearAchDebitPayment200Response from a JSON string
clear_ach_debit_payment200_response_instance = ClearAchDebitPayment200Response.from_json(json)
# print the JSON string representation of the object
print(ClearAchDebitPayment200Response.to_json())

# convert the object into a dict
clear_ach_debit_payment200_response_dict = clear_ach_debit_payment200_response_instance.to_dict()
# create an instance of ClearAchDebitPayment200Response from a dict
clear_ach_debit_payment200_response_from_dict = ClearAchDebitPayment200Response.from_dict(clear_ach_debit_payment200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


