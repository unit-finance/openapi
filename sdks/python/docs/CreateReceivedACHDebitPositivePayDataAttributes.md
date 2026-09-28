# CreateReceivedACHDebitPositivePayDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originator_name** | **str** | Name of the ACH Received Payment originator. Required if originatorEntityId is not provided. | 
**originator_entity_id** | **str** | Entity ID of the ACH Received Payment originator. Required if originatorName is not provided. | 
**amount** | **int** | Maximum allowed debit amount in cents. Decisioning uses this as a maximum. | [optional] 
**expiration_date** | **date** | When the authorization expires. | [optional] 
**tags** | **Dict[str, object]** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_received_ach_debit_positive_pay_data_attributes import CreateReceivedACHDebitPositivePayDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateReceivedACHDebitPositivePayDataAttributes from a JSON string
create_received_ach_debit_positive_pay_data_attributes_instance = CreateReceivedACHDebitPositivePayDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateReceivedACHDebitPositivePayDataAttributes.to_json())

# convert the object into a dict
create_received_ach_debit_positive_pay_data_attributes_dict = create_received_ach_debit_positive_pay_data_attributes_instance.to_dict()
# create an instance of CreateReceivedACHDebitPositivePayDataAttributes from a dict
create_received_ach_debit_positive_pay_data_attributes_from_dict = CreateReceivedACHDebitPositivePayDataAttributes.from_dict(create_received_ach_debit_positive_pay_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


