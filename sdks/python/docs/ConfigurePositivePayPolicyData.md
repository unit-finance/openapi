# ConfigurePositivePayPolicyData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**ConfigurePositivePayPolicyDataAttributes**](ConfigurePositivePayPolicyDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.configure_positive_pay_policy_data import ConfigurePositivePayPolicyData

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurePositivePayPolicyData from a JSON string
configure_positive_pay_policy_data_instance = ConfigurePositivePayPolicyData.from_json(json)
# print the JSON string representation of the object
print(ConfigurePositivePayPolicyData.to_json())

# convert the object into a dict
configure_positive_pay_policy_data_dict = configure_positive_pay_policy_data_instance.to_dict()
# create an instance of ConfigurePositivePayPolicyData from a dict
configure_positive_pay_policy_data_from_dict = ConfigurePositivePayPolicyData.from_dict(configure_positive_pay_policy_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


