# ListRewards200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Reward]**](Reward.md) |  | 
**included** | [**List[DepositAccount]**](DepositAccount.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_rewards200_response import ListRewards200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListRewards200Response from a JSON string
list_rewards200_response_instance = ListRewards200Response.from_json(json)
# print the JSON string representation of the object
print(ListRewards200Response.to_json())

# convert the object into a dict
list_rewards200_response_dict = list_rewards200_response_instance.to_dict()
# create an instance of ListRewards200Response from a dict
list_rewards200_response_from_dict = ListRewards200Response.from_dict(list_rewards200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


