# UpdateReceivedPayment200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListReceivedPayments200ResponseDataInner**](ListReceivedPayments200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_received_payment200_response import UpdateReceivedPayment200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateReceivedPayment200Response from a JSON string
update_received_payment200_response_instance = UpdateReceivedPayment200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateReceivedPayment200Response.to_json())

# convert the object into a dict
update_received_payment200_response_dict = update_received_payment200_response_instance.to_dict()
# create an instance of UpdateReceivedPayment200Response from a dict
update_received_payment200_response_from_dict = UpdateReceivedPayment200Response.from_dict(update_received_payment200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


