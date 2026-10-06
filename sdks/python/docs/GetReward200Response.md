# GetReward200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Reward**](Reward.md) |  | 
**included** | [**List[ListTransactions200ResponseIncludedInner]**](ListTransactions200ResponseIncludedInner.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.get_reward200_response import GetReward200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetReward200Response from a JSON string
get_reward200_response_instance = GetReward200Response.from_json(json)
# print the JSON string representation of the object
print(GetReward200Response.to_json())

# convert the object into a dict
get_reward200_response_dict = get_reward200_response_instance.to_dict()
# create an instance of GetReward200Response from a dict
get_reward200_response_from_dict = GetReward200Response.from_dict(get_reward200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


