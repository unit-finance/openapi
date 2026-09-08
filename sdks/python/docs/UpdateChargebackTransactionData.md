# UpdateChargebackTransactionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateChargebackTransactionDataAttributes**](UpdateChargebackTransactionDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_chargeback_transaction_data import UpdateChargebackTransactionData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChargebackTransactionData from a JSON string
update_chargeback_transaction_data_instance = UpdateChargebackTransactionData.from_json(json)
# print the JSON string representation of the object
print(UpdateChargebackTransactionData.to_json())

# convert the object into a dict
update_chargeback_transaction_data_dict = update_chargeback_transaction_data_instance.to_dict()
# create an instance of UpdateChargebackTransactionData from a dict
update_chargeback_transaction_data_from_dict = UpdateChargebackTransactionData.from_dict(update_chargeback_transaction_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


