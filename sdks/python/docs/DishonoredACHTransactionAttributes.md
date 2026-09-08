# DishonoredACHTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**description** | **str** | Transaction description. | 
**company_name** | **str** | The name by which the originator is known to the receiver. | 
**counterparty_routing_number** | **str** | The routing number of the party that originated the ACH payment. | 
**trace_number** | **str** | The ACH Trace Number. | 
**reason** | **str** | The reason for the dishonored return. | 
**sec_code** | **str** | The 3-letter ACH Standard Entry Class (SEC) Code (e.g. WEB, CCD, PPD, etc.). | [optional] 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.dishonored_ach_transaction_attributes import DishonoredACHTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of DishonoredACHTransactionAttributes from a JSON string
dishonored_ach_transaction_attributes_instance = DishonoredACHTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(DishonoredACHTransactionAttributes.to_json())

# convert the object into a dict
dishonored_ach_transaction_attributes_dict = dishonored_ach_transaction_attributes_instance.to_dict()
# create an instance of DishonoredACHTransactionAttributes from a dict
dishonored_ach_transaction_attributes_from_dict = DishonoredACHTransactionAttributes.from_dict(dishonored_ach_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


