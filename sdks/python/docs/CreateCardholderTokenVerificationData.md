# CreateCardholderTokenVerificationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateCardholderTokenVerificationDataAttributes**](CreateCardholderTokenVerificationDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_cardholder_token_verification_data import CreateCardholderTokenVerificationData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardholderTokenVerificationData from a JSON string
create_cardholder_token_verification_data_instance = CreateCardholderTokenVerificationData.from_json(json)
# print the JSON string representation of the object
print(CreateCardholderTokenVerificationData.to_json())

# convert the object into a dict
create_cardholder_token_verification_data_dict = create_cardholder_token_verification_data_instance.to_dict()
# create an instance of CreateCardholderTokenVerificationData from a dict
create_cardholder_token_verification_data_from_dict = CreateCardholderTokenVerificationData.from_dict(create_cardholder_token_verification_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


