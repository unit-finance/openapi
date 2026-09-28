# ListPositivePay200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListPositivePay200ResponseDataInner]**](ListPositivePay200ResponseDataInner.md) | Array of positive pay rule resources. Each resource can be any of the listed rule types, as indicated by the type field. | 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_positive_pay200_response import ListPositivePay200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListPositivePay200Response from a JSON string
list_positive_pay200_response_instance = ListPositivePay200Response.from_json(json)
# print the JSON string representation of the object
print(ListPositivePay200Response.to_json())

# convert the object into a dict
list_positive_pay200_response_dict = list_positive_pay200_response_instance.to_dict()
# create an instance of ListPositivePay200Response from a dict
list_positive_pay200_response_from_dict = ListPositivePay200Response.from_dict(list_positive_pay200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


