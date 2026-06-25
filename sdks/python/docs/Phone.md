# Phone


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Country code of the phone number, e.g. \&quot;1\&quot; for US. | 
**number** | **str** | The phone number without the country code, e.g. \&quot;4151193497\&quot;. For US phone numbers, 10 digits are required. | 

## Example

```python
from unit_finance_sdk.models.phone import Phone

# TODO update the JSON string below
json = "{}"
# create an instance of Phone from a JSON string
phone_instance = Phone.from_json(json)
# print the JSON string representation of the object
print(Phone.to_json())

# convert the object into a dict
phone_dict = phone_instance.to_dict()
# create an instance of Phone from a dict
phone_from_dict = Phone.from_dict(phone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


