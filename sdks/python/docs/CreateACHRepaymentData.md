# CreateACHRepaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateACHRepaymentDataAttributes**](CreateACHRepaymentDataAttributes.md) |  | 
**relationships** | [**CreateRecurringACHRepaymentDataRelationships**](CreateRecurringACHRepaymentDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_ach_repayment_data import CreateACHRepaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHRepaymentData from a JSON string
create_ach_repayment_data_instance = CreateACHRepaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateACHRepaymentData.to_json())

# convert the object into a dict
create_ach_repayment_data_dict = create_ach_repayment_data_instance.to_dict()
# create an instance of CreateACHRepaymentData from a dict
create_ach_repayment_data_from_dict = CreateACHRepaymentData.from_dict(create_ach_repayment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


