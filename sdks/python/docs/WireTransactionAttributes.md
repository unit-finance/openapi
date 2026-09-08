# WireTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**imad_omad** | **Dict[str, object]** | (Conditional) IMAD/OMAD - Input/Output Message Accountability Data. It&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. | 
**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other end of the transaction, either the beneficiary or the originator. | 
**description** | **str** | Description of the transaction as entered by the originator. | [optional] 
**originator_to_beneficiary_information** | **str** | Originator To Beneficiary Information, multi-line string delimited by \\n. | 
**sender_reference** | **str** | Sender reference. | 
**reference_for_beneficiary** | **str** | Reference for the Beneficiary. | 
**beneficiary_information** | **str** | Beneficiary Information, multi-line string delimited by \\n. | 
**beneficiary_advice_information** | **str** | Beneficiary Advice Information, multi-line string delimited by \\n. | 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.wire_transaction_attributes import WireTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of WireTransactionAttributes from a JSON string
wire_transaction_attributes_instance = WireTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(WireTransactionAttributes.to_json())

# convert the object into a dict
wire_transaction_attributes_dict = wire_transaction_attributes_instance.to_dict()
# create an instance of WireTransactionAttributes from a dict
wire_transaction_attributes_from_dict = WireTransactionAttributes.from_dict(wire_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


