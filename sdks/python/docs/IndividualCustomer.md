# IndividualCustomer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | **object** |  | 
**relationships** | [**IndividualCustomerRelationships**](IndividualCustomerRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.individual_customer import IndividualCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualCustomer from a JSON string
individual_customer_instance = IndividualCustomer.from_json(json)
# print the JSON string representation of the object
print(IndividualCustomer.to_json())

# convert the object into a dict
individual_customer_dict = individual_customer_instance.to_dict()
# create an instance of IndividualCustomer from a dict
individual_customer_from_dict = IndividualCustomer.from_dict(individual_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


