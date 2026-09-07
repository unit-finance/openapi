# GetCard200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListCards200ResponseDataInner**](ListCards200ResponseDataInner.md) |  | 
**included** | [**List[DepositAccount]**](DepositAccount.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.get_card200_response import GetCard200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetCard200Response from a JSON string
get_card200_response_instance = GetCard200Response.from_json(json)
# print the JSON string representation of the object
print(GetCard200Response.to_json())

# convert the object into a dict
get_card200_response_dict = get_card200_response_instance.to_dict()
# create an instance of GetCard200Response from a dict
get_card200_response_from_dict = GetCard200Response.from_dict(get_card200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


