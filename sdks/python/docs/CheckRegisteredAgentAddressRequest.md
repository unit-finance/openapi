# CheckRegisteredAgentAddressRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CheckRegisteredAgentAddressData**](CheckRegisteredAgentAddressData.md) |  | 

## Example

```python
from unit_finance_sdk.models.check_registered_agent_address_request import CheckRegisteredAgentAddressRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckRegisteredAgentAddressRequest from a JSON string
check_registered_agent_address_request_instance = CheckRegisteredAgentAddressRequest.from_json(json)
# print the JSON string representation of the object
print(CheckRegisteredAgentAddressRequest.to_json())

# convert the object into a dict
check_registered_agent_address_request_dict = check_registered_agent_address_request_instance.to_dict()
# create an instance of CheckRegisteredAgentAddressRequest from a dict
check_registered_agent_address_request_from_dict = CheckRegisteredAgentAddressRequest.from_dict(check_registered_agent_address_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


