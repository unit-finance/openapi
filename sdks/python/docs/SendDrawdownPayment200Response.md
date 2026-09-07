# SendDrawdownPayment200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**WireDrawdown**](WireDrawdown.md) |  | 

## Example

```python
from unit_finance_sdk.models.send_drawdown_payment200_response import SendDrawdownPayment200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SendDrawdownPayment200Response from a JSON string
send_drawdown_payment200_response_instance = SendDrawdownPayment200Response.from_json(json)
# print the JSON string representation of the object
print(SendDrawdownPayment200Response.to_json())

# convert the object into a dict
send_drawdown_payment200_response_dict = send_drawdown_payment200_response_instance.to_dict()
# create an instance of SendDrawdownPayment200Response from a dict
send_drawdown_payment200_response_from_dict = SendDrawdownPayment200Response.from_dict(send_drawdown_payment200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


