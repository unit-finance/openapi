# CreateCardholderTokenVerification201ResponseDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verification_token** | **str** | The verification token to pass to Create Cardholder Token together with the verification code sent to the card holder. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_cardholder_token_verification201_response_data_attributes import CreateCardholderTokenVerification201ResponseDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardholderTokenVerification201ResponseDataAttributes from a JSON string
create_cardholder_token_verification201_response_data_attributes_instance = CreateCardholderTokenVerification201ResponseDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCardholderTokenVerification201ResponseDataAttributes.to_json())

# convert the object into a dict
create_cardholder_token_verification201_response_data_attributes_dict = create_cardholder_token_verification201_response_data_attributes_instance.to_dict()
# create an instance of CreateCardholderTokenVerification201ResponseDataAttributes from a dict
create_cardholder_token_verification201_response_data_attributes_from_dict = CreateCardholderTokenVerification201ResponseDataAttributes.from_dict(create_cardholder_token_verification201_response_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


