# CreateCardholderToken201ResponseDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | The token issued for the card. | [optional] 
**expires_in** | **int** | The lifetime of the token (in seconds). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_cardholder_token201_response_data_attributes import CreateCardholderToken201ResponseDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardholderToken201ResponseDataAttributes from a JSON string
create_cardholder_token201_response_data_attributes_instance = CreateCardholderToken201ResponseDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCardholderToken201ResponseDataAttributes.to_json())

# convert the object into a dict
create_cardholder_token201_response_data_attributes_dict = create_cardholder_token201_response_data_attributes_instance.to_dict()
# create an instance of CreateCardholderToken201ResponseDataAttributes from a dict
create_cardholder_token201_response_data_attributes_from_dict = CreateCardholderToken201ResponseDataAttributes.from_dict(create_cardholder_token201_response_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


