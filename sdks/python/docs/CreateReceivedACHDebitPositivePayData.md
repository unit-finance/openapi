# CreateReceivedACHDebitPositivePayData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateReceivedACHDebitPositivePayDataAttributes**](CreateReceivedACHDebitPositivePayDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_received_ach_debit_positive_pay_data import CreateReceivedACHDebitPositivePayData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateReceivedACHDebitPositivePayData from a JSON string
create_received_ach_debit_positive_pay_data_instance = CreateReceivedACHDebitPositivePayData.from_json(json)
# print the JSON string representation of the object
print(CreateReceivedACHDebitPositivePayData.to_json())

# convert the object into a dict
create_received_ach_debit_positive_pay_data_dict = create_received_ach_debit_positive_pay_data_instance.to_dict()
# create an instance of CreateReceivedACHDebitPositivePayData from a dict
create_received_ach_debit_positive_pay_data_from_dict = CreateReceivedACHDebitPositivePayData.from_dict(create_received_ach_debit_positive_pay_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


