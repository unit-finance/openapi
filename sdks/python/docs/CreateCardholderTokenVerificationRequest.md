# CreateCardholderTokenVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCardholderTokenVerificationData**](CreateCardholderTokenVerificationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_cardholder_token_verification_request import CreateCardholderTokenVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardholderTokenVerificationRequest from a JSON string
create_cardholder_token_verification_request_instance = CreateCardholderTokenVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCardholderTokenVerificationRequest.to_json())

# convert the object into a dict
create_cardholder_token_verification_request_dict = create_cardholder_token_verification_request_instance.to_dict()
# create an instance of CreateCardholderTokenVerificationRequest from a dict
create_cardholder_token_verification_request_from_dict = CreateCardholderTokenVerificationRequest.from_dict(create_cardholder_token_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


