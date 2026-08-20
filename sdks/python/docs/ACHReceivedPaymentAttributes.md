# ACHReceivedPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all receive payment types. | 
**status** | **str** | The status of the Received Payment. One of Pending, PendingReview, MarkedForReturn, Advanced, Completed or Returned. See ReceivedPayment Statuses. Common to all received payment types. | 
**was_advanced** | **bool** | Will be true if the received payment was or is being Advanced (has or has had the status Advanced). Common to all received payment types. | 
**is_advanceable** | **bool** | Will be true if the received payment can be advanced. | 
**direction** | **str** | The direction in which the funds flow (either Debit or Credit). | 
**completion_date** | **datetime** | Shows the date on which the received ACH will be completed (settled or repaid). | 
**return_reason** | **str** | Optional. The reason if the received payment is Returned. See ACH return reasons. | [optional] 
**amount** | **int** | The amount (cents) of the ACH received payment. Common to all received payment types. | 
**description** | **str** | ACH description (maximum of 10 characters), also known as Company Entry Description. | 
**addenda** | **str** | Optional. Additional transaction description (maximum of 80 characters). | [optional] 
**company_name** | **str** | The name by which the originator is known to the receiver. | 
**originator_entity_id** | **str** | Optional. A unique identifier by which the originator is formally recognized within the ACH network. | [optional] 
**receiving_entity_name** | **str** | Optional. The name of the Recipient as it was declared by the originator of the payment. | [optional] 
**counterparty_routing_number** | **str** | The routing number of the party that originated the received ACH payment. | 
**trace_number** | **str** | The ACH Trace Number. | 
**sec_code** | **str** | Optional. The 3-letter ACH Standard Entry Class (SEC) Code (e.g. WEB, CCD, PPD, etc.). | [optional] 
**return_cutoff_time** | **datetime** | Optional. The last time when a reprocess will be accepted. Will be the next banking day 2pm ET. | [optional] 
**can_be_reprocessed** | **bool** | Optional. If set to true, the Received Payment can be reprocessed until the returnCutoffTime. If empty, the Received Payments can&#39;t be reprocessed. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.ach_received_payment_attributes import ACHReceivedPaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ACHReceivedPaymentAttributes from a JSON string
ach_received_payment_attributes_instance = ACHReceivedPaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(ACHReceivedPaymentAttributes.to_json())

# convert the object into a dict
ach_received_payment_attributes_dict = ach_received_payment_attributes_instance.to_dict()
# create an instance of ACHReceivedPaymentAttributes from a dict
ach_received_payment_attributes_from_dict = ACHReceivedPaymentAttributes.from_dict(ach_received_payment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


