# GetAccountLimits200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**attributes** | **Dict[str, object]** |  | [optional] 

## Example

```python
from unit_finance_sdk.models.get_account_limits200_response_data import GetAccountLimits200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetAccountLimits200ResponseData from a JSON string
get_account_limits200_response_data_instance = GetAccountLimits200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetAccountLimits200ResponseData.to_json())

# convert the object into a dict
get_account_limits200_response_data_dict = get_account_limits200_response_data_instance.to_dict()
# create an instance of GetAccountLimits200ResponseData from a dict
get_account_limits200_response_data_from_dict = GetAccountLimits200ResponseData.from_dict(get_account_limits200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


