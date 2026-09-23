# ExistingCustomerCreditApplicationRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**lending_program** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.existing_customer_credit_application_relationships import ExistingCustomerCreditApplicationRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ExistingCustomerCreditApplicationRelationships from a JSON string
existing_customer_credit_application_relationships_instance = ExistingCustomerCreditApplicationRelationships.from_json(json)
# print the JSON string representation of the object
print(ExistingCustomerCreditApplicationRelationships.to_json())

# convert the object into a dict
existing_customer_credit_application_relationships_dict = existing_customer_credit_application_relationships_instance.to_dict()
# create an instance of ExistingCustomerCreditApplicationRelationships from a dict
existing_customer_credit_application_relationships_from_dict = ExistingCustomerCreditApplicationRelationships.from_dict(existing_customer_credit_application_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


