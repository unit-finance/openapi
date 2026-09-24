# ExistingCustomerCreditApplication

`ExistingCustomerCreditApplication` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ExistingCustomerCreditApplicationAttributes**](ExistingCustomerCreditApplicationAttributes.md) |  | 
**relationships** | [**ExistingCustomerCreditApplicationRelationships**](ExistingCustomerCreditApplicationRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.existing_customer_credit_application import ExistingCustomerCreditApplication

# TODO update the JSON string below
json = "{}"
# create an instance of ExistingCustomerCreditApplication from a JSON string
existing_customer_credit_application_instance = ExistingCustomerCreditApplication.from_json(json)
# print the JSON string representation of the object
print(ExistingCustomerCreditApplication.to_json())

# convert the object into a dict
existing_customer_credit_application_dict = existing_customer_credit_application_instance.to_dict()
# create an instance of ExistingCustomerCreditApplication from a dict
existing_customer_credit_application_from_dict = ExistingCustomerCreditApplication.from_dict(existing_customer_credit_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


