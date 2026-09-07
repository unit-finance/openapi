# SendDrawdownPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**SendDrawdownPaymentDataAttributes**](SendDrawdownPaymentDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.send_drawdown_payment_data import SendDrawdownPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of SendDrawdownPaymentData from a JSON string
send_drawdown_payment_data_instance = SendDrawdownPaymentData.from_json(json)
# print the JSON string representation of the object
print(SendDrawdownPaymentData.to_json())

# convert the object into a dict
send_drawdown_payment_data_dict = send_drawdown_payment_data_instance.to_dict()
# create an instance of SendDrawdownPaymentData from a dict
send_drawdown_payment_data_from_dict = SendDrawdownPaymentData.from_dict(send_drawdown_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


