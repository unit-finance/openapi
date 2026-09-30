# CreateExternalRepaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateExternalRepaymentDataAttributes**](CreateExternalRepaymentDataAttributes.md) |  | 
**relationships** | [**CreateExternalRepaymentDataRelationships**](CreateExternalRepaymentDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_external_repayment_data import CreateExternalRepaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateExternalRepaymentData from a JSON string
create_external_repayment_data_instance = CreateExternalRepaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateExternalRepaymentData.to_json())

# convert the object into a dict
create_external_repayment_data_dict = create_external_repayment_data_instance.to_dict()
# create an instance of CreateExternalRepaymentData from a dict
create_external_repayment_data_from_dict = CreateExternalRepaymentData.from_dict(create_external_repayment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


