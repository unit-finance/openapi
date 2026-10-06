# GetStopPayment200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CheckStopPayment**](CheckStopPayment.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_stop_payment200_response import GetStopPayment200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetStopPayment200Response from a JSON string
get_stop_payment200_response_instance = GetStopPayment200Response.from_json(json)
# print the JSON string representation of the object
print(GetStopPayment200Response.to_json())

# convert the object into a dict
get_stop_payment200_response_dict = get_stop_payment200_response_instance.to_dict()
# create an instance of GetStopPayment200Response from a dict
get_stop_payment200_response_from_dict = GetStopPayment200Response.from_dict(get_stop_payment200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


