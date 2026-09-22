# CheckPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | 
**status** | **str** | One of New, Pending, PendingCancellation, Canceled,InDelivery, Delivered, ReturnedToSender, Processed, PendingReview, MarkedForReturn, Returned, Rejected. | 
**amount** | **int** | The amount (cents) of the check deposit. | 
**description** | **str** | Description of the Check Payment. | 
**check_number** | **str** | The serial number printed at the bottom of the check | [optional] 
**originated** | **bool** | True for checks originated through Unit | [optional] 
**on_us** | **str** |  | [optional] 
**on_us_auxiliary** | **str** |  | [optional] 
**counterparty_routing_number** | **str** | The routing number of the party that deposited the Check. | [optional] 
**return_status_reason** | **str** | The reason the Check Payment has been marked for return or returned. See Check Payment return reasons. | [optional] 
**reject_reason** | **str** |  | [optional] 
**pending_review_reasons** | **List[str]** | List of reasons as to why the Check Payment is in pending review status, more reasons may be added in the future, current possible reasons: SoftLimit. | [optional] 
**return_cutoff_time** | **datetime** | The last time when a return will be accepted using the return Check Payment endpoint. | [optional] 
**additional_verification_status** | **str** | Optional. One of &#39;Required&#39;, &#39;NotRequired&#39; or &#39;Approved&#39;, when Requires an additional verification will be required, see Approve Additional Verification. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**delivery_status** | **str** | One of Mailed, InLocalArea, Delivered, Rerouted, ReturnedToSender. Available once check status is InDelivery | [optional] 
**tracked_at** | **datetime** | The date of the last delivery status update. | [optional] 
**postal_code** | **str** | The location of the last delivery status update. | [optional] 
**expiration_date** | **date** | check expiration date, formatted YYYY-MM--DD, e.g \&quot;2020-05-01\&quot;. | [optional] 
**expected_delivery** | **date** | check expected delivery date, formatted YYYY-MM--DD, e.g \&quot;2020-05-01\&quot;. | [optional] 
**send_at** | **datetime** | The date and time in which the check is to be sent. | [optional] 
**counterparty** | [**CheckPaymentCounterpartyType**](CheckPaymentCounterpartyType.md) | The receiving party of the check. | 
**memo** | **str** | Text included on the memo line of the check. | [optional] 

## Example

```python
from unit_finance_sdk.models.check_payment_attributes import CheckPaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPaymentAttributes from a JSON string
check_payment_attributes_instance = CheckPaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(CheckPaymentAttributes.to_json())

# convert the object into a dict
check_payment_attributes_dict = check_payment_attributes_instance.to_dict()
# create an instance of CheckPaymentAttributes from a dict
check_payment_attributes_from_dict = CheckPaymentAttributes.from_dict(check_payment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


