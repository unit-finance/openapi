# CheckRegisteredAgentAddress200ResponseDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_registered_agent_address** | **bool** | Returns whether the provided address is a Registered Agent address. | 

## Example

```python
from unit_finance_sdk.models.check_registered_agent_address200_response_data_attributes import CheckRegisteredAgentAddress200ResponseDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CheckRegisteredAgentAddress200ResponseDataAttributes from a JSON string
check_registered_agent_address200_response_data_attributes_instance = CheckRegisteredAgentAddress200ResponseDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CheckRegisteredAgentAddress200ResponseDataAttributes.to_json())

# convert the object into a dict
check_registered_agent_address200_response_data_attributes_dict = check_registered_agent_address200_response_data_attributes_instance.to_dict()
# create an instance of CheckRegisteredAgentAddress200ResponseDataAttributes from a dict
check_registered_agent_address200_response_data_attributes_from_dict = CheckRegisteredAgentAddress200ResponseDataAttributes.from_dict(check_registered_agent_address200_response_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


