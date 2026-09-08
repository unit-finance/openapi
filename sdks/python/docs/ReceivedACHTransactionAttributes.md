# ReceivedACHTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**description** | **str** | Transaction description. | 
**addenda** | **str** | Additional transaction description (maximum of 50 characters). | [optional] 
**company_name** | **str** | The name by which the originator is known to the receiver. | 
**counterparty_routing_number** | **str** | The routing number of the party that originated the ACH payment. | 
**trace_number** | **str** | The ACH Trace Number. | 
**sec_code** | **str** | The 3-letter ACH Standard Entry Class (SEC) Code (e.g. WEB, CCD, PPD, etc.). | [optional] 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.received_ach_transaction_attributes import ReceivedACHTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivedACHTransactionAttributes from a JSON string
received_ach_transaction_attributes_instance = ReceivedACHTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(ReceivedACHTransactionAttributes.to_json())

# convert the object into a dict
received_ach_transaction_attributes_dict = received_ach_transaction_attributes_instance.to_dict()
# create an instance of ReceivedACHTransactionAttributes from a dict
received_ach_transaction_attributes_from_dict = ReceivedACHTransactionAttributes.from_dict(received_ach_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


