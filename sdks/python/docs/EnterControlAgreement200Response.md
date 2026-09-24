# EnterControlAgreement200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DepositAccount**](DepositAccount.md) | Deposit Account resource. | 

## Example

```python
from unit_finance_sdk.models.enter_control_agreement200_response import EnterControlAgreement200Response

# TODO update the JSON string below
json = "{}"
# create an instance of EnterControlAgreement200Response from a JSON string
enter_control_agreement200_response_instance = EnterControlAgreement200Response.from_json(json)
# print the JSON string representation of the object
print(EnterControlAgreement200Response.to_json())

# convert the object into a dict
enter_control_agreement200_response_dict = enter_control_agreement200_response_instance.to_dict()
# create an instance of EnterControlAgreement200Response from a dict
enter_control_agreement200_response_from_dict = EnterControlAgreement200Response.from_dict(enter_control_agreement200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


