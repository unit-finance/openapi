# ReturnExternalRepaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | **object** |  | 
**relationships** | [**ReturnExternalRepaymentDataRelationships**](ReturnExternalRepaymentDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.return_external_repayment_data import ReturnExternalRepaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnExternalRepaymentData from a JSON string
return_external_repayment_data_instance = ReturnExternalRepaymentData.from_json(json)
# print the JSON string representation of the object
print(ReturnExternalRepaymentData.to_json())

# convert the object into a dict
return_external_repayment_data_dict = return_external_repayment_data_instance.to_dict()
# create an instance of ReturnExternalRepaymentData from a dict
return_external_repayment_data_from_dict = ReturnExternalRepaymentData.from_dict(return_external_repayment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


