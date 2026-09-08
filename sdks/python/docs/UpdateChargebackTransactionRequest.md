# UpdateChargebackTransactionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateChargebackTransactionData**](UpdateChargebackTransactionData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_chargeback_transaction_request import UpdateChargebackTransactionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChargebackTransactionRequest from a JSON string
update_chargeback_transaction_request_instance = UpdateChargebackTransactionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateChargebackTransactionRequest.to_json())

# convert the object into a dict
update_chargeback_transaction_request_dict = update_chargeback_transaction_request_instance.to_dict()
# create an instance of UpdateChargebackTransactionRequest from a dict
update_chargeback_transaction_request_from_dict = UpdateChargebackTransactionRequest.from_dict(update_chargeback_transaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


