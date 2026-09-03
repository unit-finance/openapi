# PhoneType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Country code of the phone number, e.g. \&quot;1\&quot; for US. | 
**number** | **str** | The phone number without the country code, e.g. \&quot;4151193497\&quot;. For US phone numbers, 10 digits are required. | 

## Example

```python
from unit_finance_sdk.models.phone_type import PhoneType

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneType from a JSON string
phone_type_instance = PhoneType.from_json(json)
# print the JSON string representation of the object
print(PhoneType.to_json())

# convert the object into a dict
phone_type_dict = phone_type_instance.to_dict()
# create an instance of PhoneType from a dict
phone_type_from_dict = PhoneType.from_dict(phone_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


