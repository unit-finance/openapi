# CheckRegisteredAgentAddress200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CheckRegisteredAgentAddress200ResponseDataAttributes**](CheckRegisteredAgentAddress200ResponseDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.check_registered_agent_address200_response_data import CheckRegisteredAgentAddress200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CheckRegisteredAgentAddress200ResponseData from a JSON string
check_registered_agent_address200_response_data_instance = CheckRegisteredAgentAddress200ResponseData.from_json(json)
# print the JSON string representation of the object
print(CheckRegisteredAgentAddress200ResponseData.to_json())

# convert the object into a dict
check_registered_agent_address200_response_data_dict = check_registered_agent_address200_response_data_instance.to_dict()
# create an instance of CheckRegisteredAgentAddress200ResponseData from a dict
check_registered_agent_address200_response_data_from_dict = CheckRegisteredAgentAddress200ResponseData.from_dict(check_registered_agent_address200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


