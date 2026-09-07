# ReopenAccount200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WalletAccountAttributes**](WalletAccountAttributes.md) |  | 
**relationships** | [**CreditAccountRelationships**](CreditAccountRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.reopen_account200_response_data import ReopenAccount200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ReopenAccount200ResponseData from a JSON string
reopen_account200_response_data_instance = ReopenAccount200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ReopenAccount200ResponseData.to_json())

# convert the object into a dict
reopen_account200_response_data_dict = reopen_account200_response_data_instance.to_dict()
# create an instance of ReopenAccount200ResponseData from a dict
reopen_account200_response_data_from_dict = ReopenAccount200ResponseData.from_dict(reopen_account200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


