# CreateCardholderToken201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCardholderToken201ResponseData**](CreateCardholderToken201ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_cardholder_token201_response import CreateCardholderToken201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardholderToken201Response from a JSON string
create_cardholder_token201_response_instance = CreateCardholderToken201Response.from_json(json)
# print the JSON string representation of the object
print(CreateCardholderToken201Response.to_json())

# convert the object into a dict
create_cardholder_token201_response_dict = create_cardholder_token201_response_instance.to_dict()
# create an instance of CreateCardholderToken201Response from a dict
create_cardholder_token201_response_from_dict = CreateCardholderToken201Response.from_dict(create_cardholder_token201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


