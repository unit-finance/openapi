# BusinessCustomerRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**application** | [**Relationship**](Relationship.md) |  | [optional] 
**authorized_user_resources** | [**Relationship**](Relationship.md) |  | [optional] 
**officer** | [**Relationship**](Relationship.md) |  | [optional] 
**beneficial_owners** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.business_customer_relationships import BusinessCustomerRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCustomerRelationships from a JSON string
business_customer_relationships_instance = BusinessCustomerRelationships.from_json(json)
# print the JSON string representation of the object
print(BusinessCustomerRelationships.to_json())

# convert the object into a dict
business_customer_relationships_dict = business_customer_relationships_instance.to_dict()
# create an instance of BusinessCustomerRelationships from a dict
business_customer_relationships_from_dict = BusinessCustomerRelationships.from_dict(business_customer_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


