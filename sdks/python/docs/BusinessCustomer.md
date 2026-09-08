# BusinessCustomer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BusinessCustomerAttributes**](BusinessCustomerAttributes.md) |  | 
**relationships** | [**BusinessCustomerRelationships**](BusinessCustomerRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.business_customer import BusinessCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCustomer from a JSON string
business_customer_instance = BusinessCustomer.from_json(json)
# print the JSON string representation of the object
print(BusinessCustomer.to_json())

# convert the object into a dict
business_customer_dict = business_customer_instance.to_dict()
# create an instance of BusinessCustomer from a dict
business_customer_from_dict = BusinessCustomer.from_dict(business_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


