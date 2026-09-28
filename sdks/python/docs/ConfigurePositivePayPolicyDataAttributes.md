# ConfigurePositivePayPolicyDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**opt_in_types** | **List[str]** | Payment types to opt in. Supported values: CheckPayment, ReceivedAchDebit. | 

## Example

```python
from unit_finance_sdk.models.configure_positive_pay_policy_data_attributes import ConfigurePositivePayPolicyDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurePositivePayPolicyDataAttributes from a JSON string
configure_positive_pay_policy_data_attributes_instance = ConfigurePositivePayPolicyDataAttributes.from_json(json)
# print the JSON string representation of the object
print(ConfigurePositivePayPolicyDataAttributes.to_json())

# convert the object into a dict
configure_positive_pay_policy_data_attributes_dict = configure_positive_pay_policy_data_attributes_instance.to_dict()
# create an instance of ConfigurePositivePayPolicyDataAttributes from a dict
configure_positive_pay_policy_data_attributes_from_dict = ConfigurePositivePayPolicyDataAttributes.from_dict(configure_positive_pay_policy_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


