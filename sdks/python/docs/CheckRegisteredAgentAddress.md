# CheckRegisteredAgentAddress

Represents whether the provided address is a Registered Agent address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_registered_agent_address** | **bool** | Returns whether the provided address is a Registered Agent address. | 

## Example

```python
from unit_finance_sdk.models.check_registered_agent_address import CheckRegisteredAgentAddress

# TODO update the JSON string below
json = "{}"
# create an instance of CheckRegisteredAgentAddress from a JSON string
check_registered_agent_address_instance = CheckRegisteredAgentAddress.from_json(json)
# print the JSON string representation of the object
print(CheckRegisteredAgentAddress.to_json())

# convert the object into a dict
check_registered_agent_address_dict = check_registered_agent_address_instance.to_dict()
# create an instance of CheckRegisteredAgentAddress from a dict
check_registered_agent_address_from_dict = CheckRegisteredAgentAddress.from_dict(check_registered_agent_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


