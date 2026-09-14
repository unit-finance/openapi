# AuthorizedUserType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the authorized user. | 
**email** | **str** | The authorized user&#39;s email address. | 
**phone** | [**PhoneType**](PhoneType.md) | The authorized user&#39;s phone number. This number will be used for One Time Password (OTP) authentication. | 
**jwt_subject** | **str** | Optional. See this section for more information. | [optional] 
**can_connect_with_auth_vendor** | **bool** | Optional. Default is true. When set to false, the authorized user cannot authenticate through exchange networks such as Plaid. See Plaid Exchange for more information. | [optional] 

## Example

```python
from unit_finance_sdk.models.authorized_user_type import AuthorizedUserType

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizedUserType from a JSON string
authorized_user_type_instance = AuthorizedUserType.from_json(json)
# print the JSON string representation of the object
print(AuthorizedUserType.to_json())

# convert the object into a dict
authorized_user_type_dict = authorized_user_type_instance.to_dict()
# create an instance of AuthorizedUserType from a dict
authorized_user_type_from_dict = AuthorizedUserType.from_dict(authorized_user_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


