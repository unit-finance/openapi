# ListStopPayments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CheckStopPayment]**](CheckStopPayment.md) |  | 

## Example

```python
from unit_finance_sdk.models.list_stop_payments200_response import ListStopPayments200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListStopPayments200Response from a JSON string
list_stop_payments200_response_instance = ListStopPayments200Response.from_json(json)
# print the JSON string representation of the object
print(ListStopPayments200Response.to_json())

# convert the object into a dict
list_stop_payments200_response_dict = list_stop_payments200_response_instance.to_dict()
# create an instance of ListStopPayments200Response from a dict
list_stop_payments200_response_from_dict = ListStopPayments200Response.from_dict(list_stop_payments200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


