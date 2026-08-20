# GetAccountLimits200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**GetAccountLimits200ResponseData**](GetAccountLimits200ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_account_limits200_response import GetAccountLimits200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAccountLimits200Response from a JSON string
get_account_limits200_response_instance = GetAccountLimits200Response.from_json(json)
# print the JSON string representation of the object
print(GetAccountLimits200Response.to_json())

# convert the object into a dict
get_account_limits200_response_dict = get_account_limits200_response_instance.to_dict()
# create an instance of GetAccountLimits200Response from a dict
get_account_limits200_response_from_dict = GetAccountLimits200Response.from_dict(get_account_limits200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


