# ListReceivables200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | [optional] 
**attributes** | [**ReceivablesBalanceAttributes**](ReceivablesBalanceAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.list_receivables200_response_data import ListReceivables200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ListReceivables200ResponseData from a JSON string
list_receivables200_response_data_instance = ListReceivables200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ListReceivables200ResponseData.to_json())

# convert the object into a dict
list_receivables200_response_data_dict = list_receivables200_response_data_instance.to_dict()
# create an instance of ListReceivables200ResponseData from a dict
list_receivables200_response_data_from_dict = ListReceivables200ResponseData.from_dict(list_receivables200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


