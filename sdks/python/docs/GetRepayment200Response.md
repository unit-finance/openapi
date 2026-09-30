# GetRepayment200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListRepayments200ResponseDataInner**](ListRepayments200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_repayment200_response import GetRepayment200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetRepayment200Response from a JSON string
get_repayment200_response_instance = GetRepayment200Response.from_json(json)
# print the JSON string representation of the object
print(GetRepayment200Response.to_json())

# convert the object into a dict
get_repayment200_response_dict = get_repayment200_response_instance.to_dict()
# create an instance of GetRepayment200Response from a dict
get_repayment200_response_from_dict = GetRepayment200Response.from_dict(get_repayment200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


