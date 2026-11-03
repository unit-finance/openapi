# GetAvailableDepositProducts200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**attributes** | [**GetAvailableDepositProducts200ResponseDataInnerAttributes**](GetAvailableDepositProducts200ResponseDataInnerAttributes.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.get_available_deposit_products200_response_data_inner import GetAvailableDepositProducts200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAvailableDepositProducts200ResponseDataInner from a JSON string
get_available_deposit_products200_response_data_inner_instance = GetAvailableDepositProducts200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(GetAvailableDepositProducts200ResponseDataInner.to_json())

# convert the object into a dict
get_available_deposit_products200_response_data_inner_dict = get_available_deposit_products200_response_data_inner_instance.to_dict()
# create an instance of GetAvailableDepositProducts200ResponseDataInner from a dict
get_available_deposit_products200_response_data_inner_from_dict = GetAvailableDepositProducts200ResponseDataInner.from_dict(get_available_deposit_products200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


