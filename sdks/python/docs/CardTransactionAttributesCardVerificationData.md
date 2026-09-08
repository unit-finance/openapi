# CardTransactionAttributesCardVerificationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verification_method** | **str** | The verification method used, one of: Address, CVV2, AddressAndCVV2. | [optional] 

## Example

```python
from unit_finance_sdk.models.card_transaction_attributes_card_verification_data import CardTransactionAttributesCardVerificationData

# TODO update the JSON string below
json = "{}"
# create an instance of CardTransactionAttributesCardVerificationData from a JSON string
card_transaction_attributes_card_verification_data_instance = CardTransactionAttributesCardVerificationData.from_json(json)
# print the JSON string representation of the object
print(CardTransactionAttributesCardVerificationData.to_json())

# convert the object into a dict
card_transaction_attributes_card_verification_data_dict = card_transaction_attributes_card_verification_data_instance.to_dict()
# create an instance of CardTransactionAttributesCardVerificationData from a dict
card_transaction_attributes_card_verification_data_from_dict = CardTransactionAttributesCardVerificationData.from_dict(card_transaction_attributes_card_verification_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


