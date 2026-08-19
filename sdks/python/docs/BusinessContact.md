# BusinessContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | [**FullName**](FullName.md) | Full name of the contact. | 
**email** | **str** | The contact&#39;s email address. | 
**phone** | [**Phone**](Phone.md) | The contact&#39;s phone number. | 
**jwt_subject** | **str** | Optional. See this section for more information. | [optional] 

## Example

```python
from unit_finance_sdk.models.business_contact import BusinessContact

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessContact from a JSON string
business_contact_instance = BusinessContact.from_json(json)
# print the JSON string representation of the object
print(BusinessContact.to_json())

# convert the object into a dict
business_contact_dict = business_contact_instance.to_dict()
# create an instance of BusinessContact from a dict
business_contact_from_dict = BusinessContact.from_dict(business_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


