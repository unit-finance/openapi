# ListCreditApplications200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ExistingCustomerCreditApplicationAttributes**](ExistingCustomerCreditApplicationAttributes.md) |  | 
**relationships** | [**OnboardingCreditApplicationRelationships**](OnboardingCreditApplicationRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_credit_applications200_response_data_inner import ListCreditApplications200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListCreditApplications200ResponseDataInner from a JSON string
list_credit_applications200_response_data_inner_instance = ListCreditApplications200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListCreditApplications200ResponseDataInner.to_json())

# convert the object into a dict
list_credit_applications200_response_data_inner_dict = list_credit_applications200_response_data_inner_instance.to_dict()
# create an instance of ListCreditApplications200ResponseDataInner from a dict
list_credit_applications200_response_data_inner_from_dict = ListCreditApplications200ResponseDataInner.from_dict(list_credit_applications200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


