# UpdatePolicyData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdatePolicyDataAttributes**](UpdatePolicyDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_policy_data import UpdatePolicyData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePolicyData from a JSON string
update_policy_data_instance = UpdatePolicyData.from_json(json)
# print the JSON string representation of the object
print(UpdatePolicyData.to_json())

# convert the object into a dict
update_policy_data_dict = update_policy_data_instance.to_dict()
# create an instance of UpdatePolicyData from a dict
update_policy_data_from_dict = UpdatePolicyData.from_dict(update_policy_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


