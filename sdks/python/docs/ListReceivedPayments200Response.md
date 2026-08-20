# ListReceivedPayments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ACHReceivedPayment]**](ACHReceivedPayment.md) |  | 
**included** | **List[Dict[str, object]]** | Array of resources requested by the include query parameter. | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_received_payments200_response import ListReceivedPayments200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListReceivedPayments200Response from a JSON string
list_received_payments200_response_instance = ListReceivedPayments200Response.from_json(json)
# print the JSON string representation of the object
print(ListReceivedPayments200Response.to_json())

# convert the object into a dict
list_received_payments200_response_dict = list_received_payments200_response_instance.to_dict()
# create an instance of ListReceivedPayments200Response from a dict
list_received_payments200_response_from_dict = ListReceivedPayments200Response.from_dict(list_received_payments200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


