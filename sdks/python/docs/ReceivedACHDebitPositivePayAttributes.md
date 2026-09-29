# ReceivedACHDebitPositivePayAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | One of Active, Expired, or Cancelled. | 
**originator_name** | **str** | Name of the ACH debit originator. | 
**originator_entity_id** | **str** | Entity ID of the ACH debit originator. | 
**amount** | **int** | Maximum allowed debit amount in cents. | 
**expiration_date** | **date** | When the authorization expires. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.received_ach_debit_positive_pay_attributes import ReceivedACHDebitPositivePayAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivedACHDebitPositivePayAttributes from a JSON string
received_ach_debit_positive_pay_attributes_instance = ReceivedACHDebitPositivePayAttributes.from_json(json)
# print the JSON string representation of the object
print(ReceivedACHDebitPositivePayAttributes.to_json())

# convert the object into a dict
received_ach_debit_positive_pay_attributes_dict = received_ach_debit_positive_pay_attributes_instance.to_dict()
# create an instance of ReceivedACHDebitPositivePayAttributes from a dict
received_ach_debit_positive_pay_attributes_from_dict = ReceivedACHDebitPositivePayAttributes.from_dict(received_ach_debit_positive_pay_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


