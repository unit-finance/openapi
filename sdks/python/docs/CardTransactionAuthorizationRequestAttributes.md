# CardTransactionAuthorizationRequestAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the authorization request was created. | 
**amount** | **int** | The amount (cents) of the authorization request. | 
**status** | **str** | The status of the authorization request. Either Pending, Approved or Declined. | 
**partial_approval_allowed** | **bool** | Indicates whether the authorization request supports partial amount approval. | 
**approved_amount** | **int** | The amount (cents) that was approved. Available only when status is Approved. | [optional] 
**decline_reason** | **str** | The reason the authorization request was declined. One of AccountClosed, CardExceedsAmountLimit, DoNotHonor, InsufficientFunds, InvalidMerchant, ReferToCardIssuer, RestrictedCard, Timeout, TransactionNotPermittedToCardholder. Available only when status is Declined | [optional] 
**merchant** | [**PurchaseTransactionAttributesMerchant**](PurchaseTransactionAttributesMerchant.md) |  | [optional] 
**recurring** | **bool** | Indicates whether the authorization is recurring | 
**payment_method** | **str** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. | [optional] 
**digital_wallet** | **str** | The type of digital wallet used, one of: Google, Apple, Other. | [optional] 
**card_verification_data** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  | [optional] 
**card_network** | **str** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] 
**tags** | **Dict[str, object]** | Optional, See Tags. If specified when approving the authorization request. | 
**currency_conversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. | [optional] 
**is_international** | **bool** | Indicates whether the transaction is international. | [optional] 

## Example

```python
from unit_finance_sdk.models.card_transaction_authorization_request_attributes import CardTransactionAuthorizationRequestAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CardTransactionAuthorizationRequestAttributes from a JSON string
card_transaction_authorization_request_attributes_instance = CardTransactionAuthorizationRequestAttributes.from_json(json)
# print the JSON string representation of the object
print(CardTransactionAuthorizationRequestAttributes.to_json())

# convert the object into a dict
card_transaction_authorization_request_attributes_dict = card_transaction_authorization_request_attributes_instance.to_dict()
# create an instance of CardTransactionAuthorizationRequestAttributes from a dict
card_transaction_authorization_request_attributes_from_dict = CardTransactionAuthorizationRequestAttributes.from_dict(card_transaction_authorization_request_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


