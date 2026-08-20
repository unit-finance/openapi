# GetReceivedPayment200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ACHReceivedPayment**](ACHReceivedPayment.md) |  | 
**included** | **List[Dict[str, object]]** | Array of resources requested by the include query parameter. | [optional] 

## Example

```python
from unit_finance_sdk.models.get_received_payment200_response import GetReceivedPayment200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetReceivedPayment200Response from a JSON string
get_received_payment200_response_instance = GetReceivedPayment200Response.from_json(json)
# print the JSON string representation of the object
print(GetReceivedPayment200Response.to_json())

# convert the object into a dict
get_received_payment200_response_dict = get_received_payment200_response_instance.to_dict()
# create an instance of GetReceivedPayment200Response from a dict
get_received_payment200_response_from_dict = GetReceivedPayment200Response.from_dict(get_received_payment200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


