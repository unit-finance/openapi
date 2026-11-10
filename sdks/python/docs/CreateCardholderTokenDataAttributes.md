# CreateCardholderTokenDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **str** | list of Scopes separated by spaces. Only cards (cards cards-sensitive cards-write cards-sensitive-write) scopes are allowed. | 
**verification_token** | **str** | Required if scope includes a scope which requires two-factor authentication. Received as a response from Create Cardholder Token Verification. | [optional] 
**verification_code** | **str** | Required if scope includes a scope which requires two-factor authentication. 6 digit code sent to the card holder through the desired channel. | [optional] 
**expires_in** | **int** | The lifetime of the token (in seconds). Maximum value is 86400 (24 hours). Default value is also 24 hours. | [optional] 
**upgradable_scope** | **str** | list of Scopes separated by spaces. The card holder will be able to upgrade the token to the scopes you provide here. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_cardholder_token_data_attributes import CreateCardholderTokenDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardholderTokenDataAttributes from a JSON string
create_cardholder_token_data_attributes_instance = CreateCardholderTokenDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCardholderTokenDataAttributes.to_json())

# convert the object into a dict
create_cardholder_token_data_attributes_dict = create_cardholder_token_data_attributes_instance.to_dict()
# create an instance of CreateCardholderTokenDataAttributes from a dict
create_cardholder_token_data_attributes_from_dict = CreateCardholderTokenDataAttributes.from_dict(create_cardholder_token_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


