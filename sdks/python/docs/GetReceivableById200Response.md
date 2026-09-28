# GetReceivableById200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Receivable**](Receivable.md) | A receivable resource. | 

## Example

```python
from unit_finance_sdk.models.get_receivable_by_id200_response import GetReceivableById200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetReceivableById200Response from a JSON string
get_receivable_by_id200_response_instance = GetReceivableById200Response.from_json(json)
# print the JSON string representation of the object
print(GetReceivableById200Response.to_json())

# convert the object into a dict
get_receivable_by_id200_response_dict = get_receivable_by_id200_response_instance.to_dict()
# create an instance of GetReceivableById200Response from a dict
get_receivable_by_id200_response_from_dict = GetReceivableById200Response.from_dict(get_receivable_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


