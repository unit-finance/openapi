# OriginateCheckPaymentMailPhysicalCheckDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents). Must be less than 100000000000 | 
**memo** | **str** | Check payment memo. This will be printed on the check (maximum of 40 characters) | [optional] 
**send_date** | **date** | Date only (e.g. 2022-06-23). The date the check will be submitted to the processor. Up to 180 days in the future. If left null or in the past, will default to today. | [optional] 
**counterparty** | [**CheckPaymentCounterpartyType**](CheckPaymentCounterpartyType.md) | The payee&#39;s details . street and street2 combined may contain up to 50 characters. country must be \&quot;US\&quot;. | 
**description** | **str** | An internal description (maximum of 255 characters). This will not be printed on the check. | 
**idempotency_key** | **str** | See Idempotency. | 
**tags** | **Dict[str, object]** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 

## Example

```python
from unit_finance_sdk.models.originate_check_payment_mail_physical_check_data_attributes import OriginateCheckPaymentMailPhysicalCheckDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of OriginateCheckPaymentMailPhysicalCheckDataAttributes from a JSON string
originate_check_payment_mail_physical_check_data_attributes_instance = OriginateCheckPaymentMailPhysicalCheckDataAttributes.from_json(json)
# print the JSON string representation of the object
print(OriginateCheckPaymentMailPhysicalCheckDataAttributes.to_json())

# convert the object into a dict
originate_check_payment_mail_physical_check_data_attributes_dict = originate_check_payment_mail_physical_check_data_attributes_instance.to_dict()
# create an instance of OriginateCheckPaymentMailPhysicalCheckDataAttributes from a dict
originate_check_payment_mail_physical_check_data_attributes_from_dict = OriginateCheckPaymentMailPhysicalCheckDataAttributes.from_dict(originate_check_payment_mail_physical_check_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


