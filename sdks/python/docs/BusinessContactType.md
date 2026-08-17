# BusinessContactType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the contact. | 
**email** | **str** | The contact&#39;s email address. | 
**phone** | [**PhoneType**](PhoneType.md) | The contact&#39;s phone number. | 
**jwt_subject** | **str** | Optional. See this section for more information. | [optional] 

## Example

```python
from unit_finance_sdk.models.business_contact_type import BusinessContactType

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessContactType from a JSON string
business_contact_type_instance = BusinessContactType.from_json(json)
# print the JSON string representation of the object
print(BusinessContactType.to_json())

# convert the object into a dict
business_contact_type_dict = business_contact_type_instance.to_dict()
# create an instance of BusinessContactType from a dict
business_contact_type_from_dict = BusinessContactType.from_dict(business_contact_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


