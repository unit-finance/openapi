# ACHStopPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | 
**min_amount** | **int** | The amount (cents) above which a received ACH payments will be stopped. | [optional] 
**originator_name** | **List[str]** | Array of originator names to look on a payment to stop. | [optional] 
**direction** | **str** | Debit only. | 
**expiration** | **datetime** | Expiration date fo the stop payment | [optional] 
**is_multi_use** | **bool** |  | [optional] 
**description** | **str** |  | 
**disable_reason** | **str** | One of Expired, Requested or PaymentStopped | [optional] 
**idempotency_key** | **str** | Optional, but **strongly recommended**. See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_stop_payment_attributes import ACHStopPaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ACHStopPaymentAttributes from a JSON string
ach_stop_payment_attributes_instance = ACHStopPaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(ACHStopPaymentAttributes.to_json())

# convert the object into a dict
ach_stop_payment_attributes_dict = ach_stop_payment_attributes_instance.to_dict()
# create an instance of ACHStopPaymentAttributes from a dict
ach_stop_payment_attributes_from_dict = ACHStopPaymentAttributes.from_dict(ach_stop_payment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


