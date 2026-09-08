# UpdateIndividualCustomerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressType**](AddressType.md) | Address of the individual. To modify or add specify the new address. | [optional] 
**phone** | [**PhoneType**](PhoneType.md) | Phone of the individual. To modify or add specify the new phone number. | [optional] 
**email** | **str** | Email address of the individual. To modify or add specify the new email address. | [optional] 
**dba** | **str** | If the individual is a sole proprietor who is doing business under a different name. To modify or add specify the new dba name. | [optional] 
**number_of_employees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Number of employees if the customer is a sole proprietor. | [optional] 
**business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | Business vertical if the customer is a sole proprietor. | [optional] 
**occupation** | [**OccupationType**](OccupationType.md) | Occupation of the individual. | [optional] 
**annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Annual income of the individual. | [optional] 
**annual_revenue** | [**AnnualRevenueType**](AnnualRevenueType.md) | Annual revenue if the customer is a sole proprietor. | [optional] 
**website** | **str** | Business&#39;s website if the customer is a sole proprietor. | [optional] 
**source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Source of income of the individual. | [optional] 
**authorized_users** | [**List[AuthorizedUserType]**](AuthorizedUserType.md) | Array of authorized users. The provided array items will replace the existing ones. | [optional] 
**tags** | **Dict[str, object]** | See Updating Tags. | [optional] 
**jwt_subject** | **str** | See this section for more information. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_individual_customer_data_attributes import UpdateIndividualCustomerDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIndividualCustomerDataAttributes from a JSON string
update_individual_customer_data_attributes_instance = UpdateIndividualCustomerDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateIndividualCustomerDataAttributes.to_json())

# convert the object into a dict
update_individual_customer_data_attributes_dict = update_individual_customer_data_attributes_instance.to_dict()
# create an instance of UpdateIndividualCustomerDataAttributes from a dict
update_individual_customer_data_attributes_from_dict = UpdateIndividualCustomerDataAttributes.from_dict(update_individual_customer_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


