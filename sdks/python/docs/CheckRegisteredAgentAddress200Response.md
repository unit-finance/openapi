# CheckRegisteredAgentAddress200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CheckRegisteredAgentAddress200ResponseData**](CheckRegisteredAgentAddress200ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.check_registered_agent_address200_response import CheckRegisteredAgentAddress200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CheckRegisteredAgentAddress200Response from a JSON string
check_registered_agent_address200_response_instance = CheckRegisteredAgentAddress200Response.from_json(json)
# print the JSON string representation of the object
print(CheckRegisteredAgentAddress200Response.to_json())

# convert the object into a dict
check_registered_agent_address200_response_dict = check_registered_agent_address200_response_instance.to_dict()
# create an instance of CheckRegisteredAgentAddress200Response from a dict
check_registered_agent_address200_response_from_dict = CheckRegisteredAgentAddress200Response.from_dict(check_registered_agent_address200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


