# CheckRegisteredAgentAddressDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) | The address to check. Must be a US address | 

## Example

```python
from unit_finance_sdk.models.check_registered_agent_address_data_attributes import CheckRegisteredAgentAddressDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CheckRegisteredAgentAddressDataAttributes from a JSON string
check_registered_agent_address_data_attributes_instance = CheckRegisteredAgentAddressDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CheckRegisteredAgentAddressDataAttributes.to_json())

# convert the object into a dict
check_registered_agent_address_data_attributes_dict = check_registered_agent_address_data_attributes_instance.to_dict()
# create an instance of CheckRegisteredAgentAddressDataAttributes from a dict
check_registered_agent_address_data_attributes_from_dict = CheckRegisteredAgentAddressDataAttributes.from_dict(check_registered_agent_address_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


