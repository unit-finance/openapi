# GetAvailableDepositProducts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GetAvailableDepositProducts200ResponseDataInner]**](GetAvailableDepositProducts200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_available_deposit_products200_response import GetAvailableDepositProducts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAvailableDepositProducts200Response from a JSON string
get_available_deposit_products200_response_instance = GetAvailableDepositProducts200Response.from_json(json)
# print the JSON string representation of the object
print(GetAvailableDepositProducts200Response.to_json())

# convert the object into a dict
get_available_deposit_products200_response_dict = get_available_deposit_products200_response_instance.to_dict()
# create an instance of GetAvailableDepositProducts200Response from a dict
get_available_deposit_products200_response_from_dict = GetAvailableDepositProducts200Response.from_dict(get_available_deposit_products200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


