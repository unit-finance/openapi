# UpdateIndividualCustomerData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateIndividualCustomerDataAttributes**](UpdateIndividualCustomerDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_individual_customer_data import UpdateIndividualCustomerData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIndividualCustomerData from a JSON string
update_individual_customer_data_instance = UpdateIndividualCustomerData.from_json(json)
# print the JSON string representation of the object
print(UpdateIndividualCustomerData.to_json())

# convert the object into a dict
update_individual_customer_data_dict = update_individual_customer_data_instance.to_dict()
# create an instance of UpdateIndividualCustomerData from a dict
update_individual_customer_data_from_dict = UpdateIndividualCustomerData.from_dict(update_individual_customer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


