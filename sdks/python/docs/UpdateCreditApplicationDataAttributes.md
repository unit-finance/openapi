# UpdateCreditApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregator_access_tokens** | **List[str]** | Array of aggregator access tokens which are Plaid (or other account linking platform) integration tokens. See Plaid processor token | [optional] 
**annual_income** | **int** | The annual income of the applicant. | [optional] 
**number_of_employees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Number of employees of the business. | [optional] 
**years_in_business** | **int** | Number of years the business has been in operation. | [optional] 
**additional_underwriting_data** | **Dict[str, object]** | Object containing key-value pairs of underwriting data per credit policy. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_credit_application_data_attributes import UpdateCreditApplicationDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCreditApplicationDataAttributes from a JSON string
update_credit_application_data_attributes_instance = UpdateCreditApplicationDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateCreditApplicationDataAttributes.to_json())

# convert the object into a dict
update_credit_application_data_attributes_dict = update_credit_application_data_attributes_instance.to_dict()
# create an instance of UpdateCreditApplicationDataAttributes from a dict
update_credit_application_data_attributes_from_dict = UpdateCreditApplicationDataAttributes.from_dict(update_credit_application_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


