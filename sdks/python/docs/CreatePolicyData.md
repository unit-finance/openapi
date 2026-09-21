# CreatePolicyData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreatePolicyDataAttributes**](CreatePolicyDataAttributes.md) |  | 
**relationships** | [**CreatePolicyDataRelationships**](CreatePolicyDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_policy_data import CreatePolicyData

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePolicyData from a JSON string
create_policy_data_instance = CreatePolicyData.from_json(json)
# print the JSON string representation of the object
print(CreatePolicyData.to_json())

# convert the object into a dict
create_policy_data_dict = create_policy_data_instance.to_dict()
# create an instance of CreatePolicyData from a dict
create_policy_data_from_dict = CreatePolicyData.from_dict(create_policy_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


