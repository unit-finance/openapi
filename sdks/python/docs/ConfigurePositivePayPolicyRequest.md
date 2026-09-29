# ConfigurePositivePayPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ConfigurePositivePayPolicyData**](ConfigurePositivePayPolicyData.md) |  | 

## Example

```python
from unit_finance_sdk.models.configure_positive_pay_policy_request import ConfigurePositivePayPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurePositivePayPolicyRequest from a JSON string
configure_positive_pay_policy_request_instance = ConfigurePositivePayPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(ConfigurePositivePayPolicyRequest.to_json())

# convert the object into a dict
configure_positive_pay_policy_request_dict = configure_positive_pay_policy_request_instance.to_dict()
# create an instance of ConfigurePositivePayPolicyRequest from a dict
configure_positive_pay_policy_request_from_dict = ConfigurePositivePayPolicyRequest.from_dict(configure_positive_pay_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


