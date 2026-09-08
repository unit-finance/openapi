# UpdateChargebackTransactionDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**summary** | **str** | Summary of the transaction. | [optional] 
**tags** | **Dict[str, object]** | See Updating Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_chargeback_transaction_data_attributes import UpdateChargebackTransactionDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChargebackTransactionDataAttributes from a JSON string
update_chargeback_transaction_data_attributes_instance = UpdateChargebackTransactionDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateChargebackTransactionDataAttributes.to_json())

# convert the object into a dict
update_chargeback_transaction_data_attributes_dict = update_chargeback_transaction_data_attributes_instance.to_dict()
# create an instance of UpdateChargebackTransactionDataAttributes from a dict
update_chargeback_transaction_data_attributes_from_dict = UpdateChargebackTransactionDataAttributes.from_dict(update_chargeback_transaction_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


