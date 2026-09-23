# ExistingCustomerCreditApplicationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | The status of the credit application. One of Created, Pending, Approved, Denied, Canceled. | 
**aggregator_access_tokens** | **List[str]** | Array of aggregator access tokens which are Plaid (or other account linking platform) integration tokens. See Plaid processor token | [optional] 
**annual_income** | **int** | The annual income of the applicant. | [optional] 
**number_of_employees** | [**NumberOfEmployeesType**](NumberOfEmployeesType.md) | Number of employees of the business. | [optional] 
**years_in_business** | **int** | Number of years the business has been in operation. | [optional] 
**additional_underwriting_data** | **Dict[str, object]** | Object containing key-value pairs of underwriting data per credit policy. | [optional] 

## Example

```python
from unit_finance_sdk.models.existing_customer_credit_application_attributes import ExistingCustomerCreditApplicationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ExistingCustomerCreditApplicationAttributes from a JSON string
existing_customer_credit_application_attributes_instance = ExistingCustomerCreditApplicationAttributes.from_json(json)
# print the JSON string representation of the object
print(ExistingCustomerCreditApplicationAttributes.to_json())

# convert the object into a dict
existing_customer_credit_application_attributes_dict = existing_customer_credit_application_attributes_instance.to_dict()
# create an instance of ExistingCustomerCreditApplicationAttributes from a dict
existing_customer_credit_application_attributes_from_dict = ExistingCustomerCreditApplicationAttributes.from_dict(existing_customer_credit_application_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


