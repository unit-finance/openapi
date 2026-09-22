# CreateCardholderTokenVerificationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | Send a verification code to the card holder through one of the following channels - sms or call. | 
**phone** | [**PhoneType**](PhoneType.md) | This allows providing the phone number of one of the customer&#39;s authorized users. The provided phone must match an authorized user phone and will be used in the One Time Password (OTP) authentication process instead of the business customer contact&#39;s phone. | [optional] 
**app_hash** | **str** | For sms verifications only, 11-character hash string that identifies your app. Appended at the end of your verification SMS body the way that client-side SMS Retriever API expects. | [optional] 
**language** | **str** | Select the verification language using a 2-letter code. Default is English. See Localization Options for the supported languages and their 2-letter code. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_cardholder_token_verification_data_attributes import CreateCardholderTokenVerificationDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardholderTokenVerificationDataAttributes from a JSON string
create_cardholder_token_verification_data_attributes_instance = CreateCardholderTokenVerificationDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCardholderTokenVerificationDataAttributes.to_json())

# convert the object into a dict
create_cardholder_token_verification_data_attributes_dict = create_cardholder_token_verification_data_attributes_instance.to_dict()
# create an instance of CreateCardholderTokenVerificationDataAttributes from a dict
create_cardholder_token_verification_data_attributes_from_dict = CreateCardholderTokenVerificationDataAttributes.from_dict(create_cardholder_token_verification_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


