# CreateACHStopPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_amount** | **int** | The amount (in cents) above which a payment will be stopped. At least one originatorName or minAmount must be provided. | [optional] 
**originator_name** | **List[str]** | The name of the originator of the payment to look for in payments to stop. At least one originatorName or minAmount must be provided. See guide for further details. | [optional] 
**direction** | **str** | Debit only. | 
**expiration** | **date** | Date only (e.g. \&quot;2001-08-15\&quot;). | [optional] 
**is_multi_use** | **bool** | Available only for ACH Stop Payments. False by default. | [optional] 
**description** | **str** | Up to 255 characters | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**idempotency_key** | **str** | Optional, but **strongly recommended**. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_ach_stop_payment_data_attributes import CreateACHStopPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHStopPaymentDataAttributes from a JSON string
create_ach_stop_payment_data_attributes_instance = CreateACHStopPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateACHStopPaymentDataAttributes.to_json())

# convert the object into a dict
create_ach_stop_payment_data_attributes_dict = create_ach_stop_payment_data_attributes_instance.to_dict()
# create an instance of CreateACHStopPaymentDataAttributes from a dict
create_ach_stop_payment_data_attributes_from_dict = CreateACHStopPaymentDataAttributes.from_dict(create_ach_stop_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


