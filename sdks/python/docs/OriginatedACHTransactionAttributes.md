# OriginatedACHTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**description** | **str** | Transaction description. | 
**addenda** | **str** | Optional, additional transaction description. | 
**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other end of the transaction. | 
**sec_code** | **str** | The 3-letter ACH Standard Entry Class (SEC) Code. One of WEB, CCD, PPD. | 
**trace_number** | **str** | The 15-digit ACH Trace Number identifies the transaction within the ACH file after transmission. | [optional] 
**tags** | **Dict[str, object]** | See Tags. Inherited from the payment tags (see Tag Inheritance). | 

## Example

```python
from unit_finance_sdk.models.originated_ach_transaction_attributes import OriginatedACHTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of OriginatedACHTransactionAttributes from a JSON string
originated_ach_transaction_attributes_instance = OriginatedACHTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(OriginatedACHTransactionAttributes.to_json())

# convert the object into a dict
originated_ach_transaction_attributes_dict = originated_ach_transaction_attributes_instance.to_dict()
# create an instance of OriginatedACHTransactionAttributes from a dict
originated_ach_transaction_attributes_from_dict = OriginatedACHTransactionAttributes.from_dict(originated_ach_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


