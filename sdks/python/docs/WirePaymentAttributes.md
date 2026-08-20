# WirePaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | Either Pending, Returned, Sent, Canceled or Rejected (see reason for details). | 
**reason** | **str** | Optional. More information about the status. | [optional] 
**direction** | **str** | The direction in which the funds flow (Credit only). | 
**description** | **str** | Payment description (maximum of 50 characters), this will show up on statement of the counterparty. | 
**counterparty** | [**WireCounterpartyType**](WireCounterpartyType.md) | The beneficiary party on the other end of the payment. | 
**amount** | **int** | The amount (cents) of the payment. | 
**tags** | **Dict[str, object]** | See Tags. | 
**imad_omad** | **Dict[str, object]** | (Conditional) IMAD/OMAD - Input/Output Message Accountability Data. It&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. | [optional] 

## Example

```python
from unit_finance_sdk.models.wire_payment_attributes import WirePaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of WirePaymentAttributes from a JSON string
wire_payment_attributes_instance = WirePaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(WirePaymentAttributes.to_json())

# convert the object into a dict
wire_payment_attributes_dict = wire_payment_attributes_instance.to_dict()
# create an instance of WirePaymentAttributes from a dict
wire_payment_attributes_from_dict = WirePaymentAttributes.from_dict(wire_payment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


