# CreateReward201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Reward**](Reward.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_reward201_response import CreateReward201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateReward201Response from a JSON string
create_reward201_response_instance = CreateReward201Response.from_json(json)
# print the JSON string representation of the object
print(CreateReward201Response.to_json())

# convert the object into a dict
create_reward201_response_dict = create_reward201_response_instance.to_dict()
# create an instance of CreateReward201Response from a dict
create_reward201_response_from_dict = CreateReward201Response.from_dict(create_reward201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


