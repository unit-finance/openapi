# CheckRegisteredAgentAddressData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CheckRegisteredAgentAddressDataAttributes**](CheckRegisteredAgentAddressDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.check_registered_agent_address_data import CheckRegisteredAgentAddressData

# TODO update the JSON string below
json = "{}"
# create an instance of CheckRegisteredAgentAddressData from a JSON string
check_registered_agent_address_data_instance = CheckRegisteredAgentAddressData.from_json(json)
# print the JSON string representation of the object
print(CheckRegisteredAgentAddressData.to_json())

# convert the object into a dict
check_registered_agent_address_data_dict = check_registered_agent_address_data_instance.to_dict()
# create an instance of CheckRegisteredAgentAddressData from a dict
check_registered_agent_address_data_from_dict = CheckRegisteredAgentAddressData.from_dict(check_registered_agent_address_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


