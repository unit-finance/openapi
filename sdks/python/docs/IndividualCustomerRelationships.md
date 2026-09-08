# IndividualCustomerRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**application** | [**Relationship**](Relationship.md) |  | [optional] 
**authorized_user_resources** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.individual_customer_relationships import IndividualCustomerRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualCustomerRelationships from a JSON string
individual_customer_relationships_instance = IndividualCustomerRelationships.from_json(json)
# print the JSON string representation of the object
print(IndividualCustomerRelationships.to_json())

# convert the object into a dict
individual_customer_relationships_dict = individual_customer_relationships_instance.to_dict()
# create an instance of IndividualCustomerRelationships from a dict
individual_customer_relationships_from_dict = IndividualCustomerRelationships.from_dict(individual_customer_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


